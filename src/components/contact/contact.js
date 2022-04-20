import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { getValueFromGeneral } from "../../util"
import "./contact.scss"

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

   const email = getValueFromGeneral(data, "Email")

   return (
      <section className="contact" id="contact">
         <div className="container">
            <h2>Kontakt</h2>
            <p>{getValueFromGeneral(data, "ContactDescription")}</p>
            <a href={`mailto:${email}`}>
               <span>
                  <FontAwesomeIcon icon={faEnvelope} />
               </span>
               {email}
            </a>
         </div>
      </section>
   )
}

export default Contact
