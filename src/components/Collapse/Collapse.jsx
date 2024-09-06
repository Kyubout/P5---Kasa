import "./collapse.scss"
import arrowUp from "../../assets/arrows/arrow-up.png"
import PropTypes from "prop-types"
import { useState } from "react"

function Collapse({ title, content }) {
  const [visible, setVisible] = useState(false)
  const open = () => {
    setVisible(!visible)
  }

  return (
    <section>
      <div className={`collapse ${visible ? "collapse__active" : ""}`}>
        <button className="collapse__button" onClick={open}>
          {title}
          <img
            src={arrowUp}
            alt="Flèche"
            className={`arrow ${visible ? "arrow__down" : "arrow__up"}`}
          />
        </button>
        {visible && (
          <div className="collapse__content">
            <p className="collapse__text">{content}</p>
          </div>
        )}
      </div>
    </section>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
}

export default Collapse
