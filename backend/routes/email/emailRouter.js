const express = require("express")
const nodemailer = require("nodemailer")
const fs = require("fs")
const handlebars = require("handlebars")
require("dotenv").config()

const emailRouter = express.Router()
const templateSource = fs.readFileSync(`${__dirname}/template.html`, "utf-8").toString()

const transporter = nodemailer.createTransport({
   service: "gmail",
   auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
   },
})

const generateMailOptions = (from, title, html) => ({
   from: process.env.EMAIL_USERNAME,
   to: process.env.EMAIL_USERNAME,
   subject: `${from} - ${title}`,
   html,
})

emailRouter.post("/", (req, res) => {
   const { from, title, content } = req.body
   let errors = []
   let errorCode = null

   // Validate data
   if (!from || !/^\S+@\S+\.\S+$/.test(from)) {
      errors.push({
         type: "email",
         msg: "Niepoprawny adres email",
      })
      errorCode = 400
   }

   if (!title || title.length < 4 || title.length > 32) {
      errors.push({
         type: "title",
         msg: "Tytuł powinien mieć długość z przedziału od 4 do 32 znaków",
      })
      errorCode = 400
   }

   if (!content || content.length < 16 || content.length > 8000) {
      errors.push({
         type: "content",
         msg: "Treść powinna mieć długość z przedziału od 16 do 8000 znaków",
      })
      errorCode = 400
   }

   if (errors.length == 0) {
      const template = handlebars.compile(templateSource)
      const html = template({
         from,
         title,
         content,
      })

      transporter.sendMail(generateMailOptions(from, title, html), (error) => {
         if (error) {
            errors.push({
               type: "general",
               msg: "Wystąpił błąd serwera",
            })
            errorCode = 500
         }
      })
   }

   if (errors.length > 0) {
      return res.status(errorCode).json(errors)
   }

   return res.status(200).json({
      msg: "Wiadomość została pomyślnie wysłana",
   })
})

module.exports = emailRouter
