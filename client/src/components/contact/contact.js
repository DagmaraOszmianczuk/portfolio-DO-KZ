import React, { useState } from "react"
import "./contact.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope, faClose } from "@fortawesome/free-solid-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import { getValueFromGeneral } from "../../util"
import { sendEmail } from "./methods"
import TextInput from "../TextInput/textInput"

const Contact = () => {
   const data = useStaticQuery(graphql`
      query ContactQuery {
         allContentfulGeneral(filter: { title: { in: ["Email", "ContactDescription"] } }) {
            nodes {
               childContentfulGeneralValueTextNode {
                  value
               }
               title
            }
         }
      }
   `)

   const emailStatic = getValueFromGeneral(data, "Email")

   const [emailFrom, setEmailFrom] = useState("")
   const [title, setTitle] = useState("")
   const [content, setContent] = useState("")

   const [errors, setErrors] = useState([])
   const [success, setSuccess] = useState(null)

   const handleSubmit = async (e) => {
      e.preventDefault()
      const [isSuccess, errorList] = await sendEmail({ from: emailFrom, title, content })

      setErrors([])
      if (!isSuccess) {
         setErrors(errorList)
      }
      setSuccess(isSuccess)
   }

   return (
      <section className="contact" id="contact">
         <div className="container">
            <h2>Kontakt</h2>
            <p>{getValueFromGeneral(data, "ContactDescription")}</p>
            <a href={`mailto:${emailStatic}`}>
               <span>
                  <FontAwesomeIcon icon={faEnvelope} />
               </span>
               {emailStatic}
            </a>

            <form onSubmit={(e) => handleSubmit(e)}>
               <TextInput
                  id="mail_from"
                  label="Twój adres Email:"
                  errors={errors}
                  errorType="email"
                  type="email"
                  placeholder="przyklad@email.com"
                  value={emailFrom}
                  onChange={(e) => {
                     setEmailFrom(e.target.value)
                  }}
               />

               <TextInput
                  id="mail_title"
                  label="Temat wiadomości:"
                  errors={errors}
                  errorType="title"
                  type="text"
                  placeholder="Przykładowy temat"
                  value={title}
                  onChange={(e) => {
                     setTitle(e.target.value)
                  }}
               />

               <TextInput
                  id="mail_content"
                  inputType="textarea"
                  label="Treść wiadomości:"
                  errors={errors}
                  errorType="content"
                  rows="10"
                  value={content}
                  onChange={(e) => {
                     setContent(e.target.value)
                  }}
               />

               <button>Wyślij</button>

               {success && (
                  <div className="success">
                     <p>Pomyślnie wysłano</p>
                     <FontAwesomeIcon icon={faClose} onClick={() => setSuccess(false)} />
                  </div>
               )}
            </form>
         </div>
      </section>
   )
}

export default Contact
