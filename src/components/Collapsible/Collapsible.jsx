import "./collapsible.scss"
import PropTypes from "prop-types"
import { useState } from "react"

function Collapsible({ title, content }) {
  const [visible, setVisible] = useState(false)
  const open = () => {
    setVisible(!visible)
  }

  return (
    <section>
      <div className="collapsible">
        <button className="collapsible__button" onClick={open}>
          {title}
          {/* <span className="fa-solid fa-chevron-up">^</span> */}
        </button>
        {visible && (
          <div className="collapsible__content active">
            <p>{content}</p>
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
