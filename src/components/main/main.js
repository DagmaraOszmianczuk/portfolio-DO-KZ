import { useStaticQuery, graphql } from "gatsby"
import { getValueFromGeneral } from "../../util"
import React from "react"
import "./main.scss"

const Main = () => {
   const data = useStaticQuery(graphql`
      query MainQuery {
         allContentfulGeneral(filter: { title: { in: ["Person", "PersonDescription"] } }) {
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
      <section className="main">
         <div className="container">
            <h1>{getValueFromGeneral(data, "Person")}</h1>
            <div className="description">{getValueFromGeneral(data, "PersonDescription")}</div>
         </div>
      </section>
   )
}

export default Main
