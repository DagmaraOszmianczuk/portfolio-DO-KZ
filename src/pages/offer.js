import * as React from "react"
import "./../../style.scss"
import Layout from "../components/layout/layout"
import Offer from "../components/offer/offer"
import Contact from "../components/contact/contact"

const IndexPage = (props) => {
   return (
      <main>
         <Layout>
            <Offer />
            <Contact />
         </Layout>
      </main>
   )
}

export default IndexPage
