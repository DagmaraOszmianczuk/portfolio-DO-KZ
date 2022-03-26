import * as React from "react"
import { graphql } from "gatsby"
import "./index.scss"
import "./../../style.scss"
import Navbar from "../components/navbar/navbar"

const IndexPage = (props) => {
   console.log(props.data)
   return (
      <main>
         <Navbar person={props.data.allContentfulGeneral.nodes[0].person} />
         <div className="container">
            <p>Main page</p>
         </div>
      </main>
   )
}

export const pageQuery = graphql`
   query HeaderQuery {
      allContentfulGeneral {
         nodes {
            person
         }
      }
   }
`

export default IndexPage
