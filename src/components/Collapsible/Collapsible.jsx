import "./collapsible.scss"
import arrowUp from "../../assets/arrows/arrow-up.png"
import PropTypes from "prop-types"
import { useState } from "react"

function Collapsible({ title, content }) {
  const [visible, setVisible] = useState(false)
  const open = () => {
    setVisible(!visible)
  }

  return (
    <section>
      <div className={`collapsible ${visible ? "collapsible__active" : ""}`}>
        <button className="collapsible__button" onClick={open}>
          {title}
          <img
            src={arrowUp}
            alt="Flèche"
            className={`arrow ${visible ? "arrow__down" : "arrow__up"}`}
          />
        </button>
        {visible && (
          <div className="collapsible__content">
            <p className="collapsible__text">{content}</p>
          </div>
        )}
      </div>
    </section>
  )
}

Collapsible.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
}

export default Collapsible
