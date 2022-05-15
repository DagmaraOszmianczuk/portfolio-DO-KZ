import * as React from "react"
import "./../../style.scss"
import Layout from "../components/layout/layout"
import Offer from "../components/offer/offer"

const OfferPage = (props) => {
   return (
      <main>
         <Layout>
            <Offer />
         </Layout>
      </main>
   )
}

export default OfferPage
