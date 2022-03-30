import React from "react"
import "./footer.scss"

const Footer = ({ person }) => {
   const currentYear = new Date().getFullYear()

   return (
      <footer>
         <div className="copyright">
            <p>
               Copyright © by <span className="person">{person}</span> {currentYear}
            </p>
         </div>
      </footer>
   )
}

export default Footer
