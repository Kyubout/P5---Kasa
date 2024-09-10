import "./slideshow.scss"
import leftArrow from "../../assets/arrows/arrow-left.png"
import rightArrow from "../../assets/arrows/arrow-right.png"
import PropTypes from "prop-types"
import { useState } from "react"
import { useParams } from "react-router-dom"

function Slideshow({ pictures }) {
  const { housingId } = useParams()
  const [currentSlide, setCurrentSlide] = useState(0)

  function goNext() {
    setCurrentSlide(currentSlide === pictures.length - 1 ? 0 : currentSlide + 1)
  }

  function goPrev() {
    setCurrentSlide(currentSlide === 0 ? pictures.length - 1 : currentSlide - 1)
  }

  const showArrows = pictures.length > 1

  return (
    <div className="container">
      <div className="slideshow">
        {pictures.map((slide, index) => (
          <figure
            key={index + housingId}
            className={`slide ${index === currentSlide ? "active" : ""}`}
          >
            <img
              src={slide}
              alt={`Slide de la location ${index + 1}/${pictures.length}`}
            />
            {showArrows && (
              <figcaption className="slide__caption">
                {index + 1}/{pictures.length}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
      {showArrows && (
        <div className="button__container">
          <button className="button__left" onClick={goPrev}>
            <img src={leftArrow} alt="Vers la slide précédente" />
          </button>
          <button className="button__right" onClick={goNext}>
            <img src={rightArrow} alt="Vers la slide suivante" />
          </button>
        </div>
      )}
    </div>
  )
}

Slideshow.propTypes = {
  pictures: PropTypes.node.isRequired,
}

export default Slideshow
