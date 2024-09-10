import "./description.scss"
import PropTypes from "prop-types"
import Collapse from "../Collapse/Collapse"
import HousingTitle from "../HousingTitle/HousingTitle"
import HousingProfil from "../HousingProfil/HousingProfil"

function Description({ currentHousing }) {
  return (
    <section className="description">
      <div className="infos">
        <HousingTitle data={currentHousing} />
        <HousingProfil data={currentHousing} />
      </div>
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
