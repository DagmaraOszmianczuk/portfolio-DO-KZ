import React, { useRef } from "react"
import { Link } from "gatsby"
import "./navbar.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"

const Navbar = ({ person }) => {
   const drawer = useRef(null)

   const toggleDrawer = () => {
      let currentClass = drawer.current.className
      drawer.current.className = currentClass === "hidden" ? "open" : "hidden"
   }

   return (
      <nav className="navbar">
         <div className="container">
            <h2>{person}</h2>
            <div className="links">
               <button onClick={toggleDrawer}>
                  <FontAwesomeIcon icon={faBars} />
               </button>
               <div ref={drawer} className="hidden">
                  <Link to="/" activeClassName="active">
                     Home
                  </Link>
                  <Link to="/photos" activeClassName="active">
                     Portfolio
                  </Link>
                  <Link to="/offer">Oferta</Link>
               </div>
            </div>
         </div>
      </nav>
   )
}

export default Navbar
