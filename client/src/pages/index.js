import * as React from "react"
import "./../../style.scss"
import Layout from "../components/layout/layout"
import Main from "../components/main/main"
import About from "../components/about/about"
import Offer from "../components/offer/offer"
import Contact from "../components/contact/contact"

const IndexPage = (props) => {
   return (
      <main>
         <Layout>
            <Main />
            <About />
            <Offer />
            <Contact />
         </Layout>
      </main>
   )
}

export default IndexPage
