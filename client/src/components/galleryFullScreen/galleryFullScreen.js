import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons"
import "./galleryFullScreen.scss"

const GalleryFullScreen = ({ isOpen, setIsOpen, images, currentPhoto, setCurrentPhoto }) => {
   if (!isOpen) {
      return null
   }

   const handleArrow = (direction) => {
      if (currentPhoto + direction > images.length - 1) {
         setCurrentPhoto(0)
         return
      }
      if (currentPhoto + direction < 0) {
         setCurrentPhoto(images.length - 1)
         return
      }
      setCurrentPhoto(currentPhoto + direction)
   }

   return (
      <div className="galleryFullScreen">
         <FontAwesomeIcon icon={faXmark} className="close" onClick={() => setIsOpen(false)} />

         <div className="content">
            <FontAwesomeIcon icon={faChevronLeft} className="arrow" onClick={() => handleArrow(-1)} />
            <div className="img-wrapper">
               <img
                  src={images[currentPhoto].image.gatsbyImageData.images.fallback.src}
                  alt={images[currentPhoto].title}
               />
            </div>
            <FontAwesomeIcon icon={faChevronRight} className="arrow" onClick={() => handleArrow(1)} />
         </div>
      </div>
   )
}

export default GalleryFullScreen
