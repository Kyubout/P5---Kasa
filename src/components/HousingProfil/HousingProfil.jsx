import "./housingProfil.scss"
import redStar from "../../assets/rating-stars/star-red.png"
import neutralStar from "../../assets/rating-stars/star-neutral.png"

function HousingProfil({ data }) {
  function getStars(rating) {
    const stars = []
    for (let i = 0; i < 5; i++) {
      if (rating - 1 < i) {
        stars.push(
          <img
            className="rating__star"
            key={i}
            src={neutralStar}
            alt="étoile vide"
          />,
        )
      } else {
        stars.push(
          <img
            className="rating__star"
            key={i}
            src={redStar}
            alt="étoile pleine"
          />,
        )
      }
    }
    return stars
  }

  return (
    <section className="profil">
      <div className="host">
        <p className="host__name">{data.host.name}</p>
        <img
          className="host__img"
          src={data.host.picture}
          alt={`Portrait de ${data.host.name}`}
        />
      </div>
      <div className="rating">{getStars(parseInt(data.rating))}</div>
    </section>
  )
}

export default HousingProfil
