import "./collapse.scss"
import arrowUp from "../../assets/arrows/arrow-up.png"
import PropTypes from "prop-types"
import { useState } from "react"

function Collapse({ title, content, id }) {
  const [visible, setVisible] = useState(false)
  const open = () => {
    setVisible(!visible)
  }

  return (
    <section className="collapse">
      <button className="collapse__button" onClick={open}>
        {title}
        <img
          src={arrowUp}
          alt="Flèche"
          className={`arrow ${visible ? "arrow__down" : "arrow__up"}`}
        />
      </button>
      <div
        className={`collapse__content ${visible ? "collapse__content--open" : "collapse__content--close"}`}
      >
        {content}
      </div>
    </section>
  )
}

Collapse.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.node.isRequired,
}

export default Collapse
