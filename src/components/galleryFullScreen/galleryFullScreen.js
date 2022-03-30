import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import doodles from "../../images/bg/doodles.png"
import "./galleryFullScreen.scss"

const GalleryFullScreen = ({ isOpen, setIsOpen, images }) => {
   if (!isOpen) {
      return null
   }

   return (
      <div className="galleryFullScreen">
         <FontAwesomeIcon icon={faXmark} className="close" onClick={() => setIsOpen(false)} />

         <div className="content">
            <FontAwesomeIcon icon={faChevronLeft} className="arrow" />
            <img src={doodles} alt="doodles" />
            <FontAwesomeIcon icon={faChevronRight} className="arrow" />
         </div>
      </div>
   )
}

export default GalleryFullScreen
