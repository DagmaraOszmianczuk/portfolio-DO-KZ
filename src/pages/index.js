import * as React from "react"
import "./index.scss"
import "./../../style.scss"
import Navbar from "../components/navbar/navbar"
import Footer from "../components/footer/footer"
import Main from "../components/main/main"
import About from "../components/about/about"

const IndexPage = (props) => {
   return (
      <main>
         <Navbar />
         <Main />
         <About />
         <Footer />
      </main>
   )
}

export default IndexPage
