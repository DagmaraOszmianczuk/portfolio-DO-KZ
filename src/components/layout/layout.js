import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Navbar from "../navbar/navbar"
import Footer from "../footer/footer"
import "./layout.scss"

const Layout = ({ children }) => {
   const data = useStaticQuery(graphql`
      query LayoutQuery {
         allContentfulGeneral(filter: { title: { eq: "Person" } }) {
            nodes {
               childContentfulGeneralValueTextNode {
                  value
               }
            }
         }
      }
   `)

   const person = data.allContentfulGeneral.nodes[0].childContentfulGeneralValueTextNode.value

   return (
      <>
         <Navbar person={person} />
         <div className="page-content">{children}</div>
         <Footer person={person} />
      </>
   )
}

export default Layout
