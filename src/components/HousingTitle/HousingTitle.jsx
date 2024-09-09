import PropType from "prop-types"
import "./housingTitle.scss"

function HousingTitle({ data }) {
  return (
    <div className="titles">
      <h1 className="title">{data.title}</h1>
      <p className="location">{data.location}</p>
      <ul className="tags">
        {data.tags.map((tag, index) => (
          <li className="tags__item" key={index}>
            {tag}
          </li>
        ))}
      </ul>
    </div>
  )
}

HousingTitle.prototype = {
  data: PropType.object.isRequired,
}

export default HousingTitle
