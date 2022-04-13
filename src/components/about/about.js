import React from "react"
import "./about.scss"
import { useStaticQuery, graphql } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDisplay } from "@fortawesome/free-solid-svg-icons"
import { getValueFromGeneral } from "../../util"

const About = () => {
   const data = useStaticQuery(graphql`
      query AboutQuery {
         contentfulSingleImages(title: { eq: "Avatar" }) {
            image {
               gatsbyImageData(width: 800)
            }
         }
         allContentfulAbout(sort: { order: ASC, fields: index }) {
            nodes {
               title
               description {
                  description
               }
               icon {
                  gatsbyImageData
               }
            }
         }
         allContentfulGeneral(filter: { title: { in: ["Person", "About"] } }) {
            nodes {
               childContentfulGeneralValueTextNode {
                  value
               }
               title
            }
         }
      }
   `)

   return (
      <section className="about" id="about">
         <div className="container">
            <div className="person">
               <div className="img-wrapper">
                  <img alt="avatar" src={data.contentfulSingleImages.image.gatsbyImageData.images.fallback.src} />
               </div>
               <h2>{getValueFromGeneral(data, "Person")}</h2>
               <p>{getValueFromGeneral(data, "About")}</p>
            </div>
            <ul>
               {data.allContentfulAbout.nodes.map((node, index) => (
                  <li key={index}>
                     <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faDisplay} />
                     </div>
                     <div className="content">
                        <h2>{node.title}</h2>
                        <p>{node.description.description}</p>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}

export default About
