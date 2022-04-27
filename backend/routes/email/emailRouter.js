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
   if (!/^\S+@\S+\.\S+$/.test(from)) {
      errors.push({
         type: "email",
         msg: "Niepoprawny adres email",
      })
      errorCode = 400
   }

   if (title.length < 4) {
      errors.push({
         type: "title",
         msg: "Tytuł powinien mieć przynajmniej 4 znaki",
      })
      errorCode = 400
   }

   if (content.length < 16) {
      errors.push({
         type: "content",
         msg: "Treść powinna mieć przynajmniej 16 znaków",
      })
      errorCode = 400
   }

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

   if (errors.length > 0) {
      res.status(errorCode).json(errors)
   }

   res.status(200).json({
      msg: "Wiadomość została pomyślnie wysłana",
   })
})

module.exports = emailRouter
