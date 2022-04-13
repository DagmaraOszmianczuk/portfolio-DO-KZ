import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import "./offer.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faDisplay } from "@fortawesome/free-solid-svg-icons"

const Offer = () => {
   const data = useStaticQuery(graphql`
      query OfferQuery {
         allContentfulOffer {
            nodes {
               title
               description {
                  description
               }
               list
            }
         }
      }
   `)

   return (
      <section className="offer" id="offer">
         <div className="container">
            <h2>Oferta</h2>
            <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia minus sed dolores dolor consequatur eum
               omnis a aliquid commodi saepe.
            </p>

            <ul>
               {data.allContentfulOffer.nodes.map((node, index) => (
                  <li key={index}>
                     <div className="icon-wrapper">
                        <FontAwesomeIcon icon={faDisplay} />
                     </div>
                     <div className="content">
                        <h3>{node.title}</h3>
                        <p>{node.description.description}</p>
                        <ul>
                           {node.list.map((element, index) => (
                              <li key={index}>{element}</li>
                           ))}
                        </ul>
                     </div>
                  </li>
               ))}
            </ul>
         </div>
      </section>
   )
}

export default Offer
