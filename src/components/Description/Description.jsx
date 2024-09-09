import "./description.scss"
import PropTypes from "prop-types"
import Collapse from "../Collapse/Collapse"
import HousingTitle from "../HousingTitle/HousingTitle"

function Description({ currentHousing }) {
  return (
    <section className="description">
      <HousingTitle data={currentHousing} />
      <div className="collapses">
        <Collapse
          title="Description"
          content={<p>{currentHousing.description}</p>}
        />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {currentHousing.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          }
        />
      </div>
    </section>
  )
}

Description.propTypes = {
  currentHousing: PropTypes.object.isRequired,
}

export default Description
