import * as React from "react"
import "./index.scss"
import "./../../style.scss"
import Layout from "../components/layout/layout"
import Main from "../components/main/main"
import About from "../components/about/about"
import Offer from "../components/offer/offer"

const IndexPage = (props) => {
   return (
      <main>
         <Layout>
            <Main />
            <About />
            <Offer />
         </Layout>
      </main>
   )
}

export default IndexPage