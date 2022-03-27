import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./footer.scss"

const Footer = ({ person }) => {
   const data = useStaticQuery(graphql`
      query FooterQuery {
         allContentfulGeneral {
            nodes {
               person
            }
         }
      }
   `)

   const currentYear = new Date().getFullYear()

   return (
      <footer>
         <div className="copyright">
            <p>
               Copyright © by <span className="person">{data.allContentfulGeneral.nodes[0].person}</span> {currentYear}
            </p>
         </div>
      </footer>
   )
}

export default Footer
