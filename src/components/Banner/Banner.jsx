import PropTypes from "prop-types"
import "./banner.scss"

function Banner({ imageUrl, title, opacity, shadow }) {
  const overStyle = {
    backgroundColor: opacity,
    boxShadow: shadow,
  }

  return (
    <div className="banner">
      <div className="banner__img">
        <img src={imageUrl} alt="Paysage" />
      </div>
      <div className="banner__overlay" style={overStyle}>
        <h1>{title}</h1>
      </div>
    </div>
  )
}

Banner.propTypes = {
  imageUrl: PropTypes.node.isRequired,
  title: PropTypes.string,
  opacity: PropTypes.node.isRequired,
  shadow: PropTypes.node,
}

export default Banner
