import { useStaticQuery, graphql } from "gatsby"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import React from "react"
import "./main.scss"

const Main = () => {
   const data = useStaticQuery(graphql`
      query MainQuery {
         allContentfulGeneral {
            nodes {
               person
               description {
                  raw
               }
            }
         }
      }
   `)

   return (
      <section className="main">
         <div className="container">
            <h1>{data.allContentfulGeneral.nodes[0].person}</h1>
            <div className="description">{renderRichText(data.allContentfulGeneral.nodes[0].description)}</div>
         </div>
      </section>
   )
}

export default Main
