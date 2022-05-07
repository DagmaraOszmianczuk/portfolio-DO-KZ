import * as React from "react"
import "./../../style.scss"
import Layout from "../components/layout/layout"
import Main from "../components/main/main"
import About from "../components/about/about"

const IndexPage = (props) => {
   return (
      <main>
         <Layout>
            <Main />
            <About />
         </Layout>
      </main>
   )
}

export default IndexPage
