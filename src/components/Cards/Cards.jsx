import data from "../../data/data.json"
import { Link } from "react-router-dom"
import "./cards.scss"

function Cards() {
  return (
    <section className="card-container">
      {data.map((card) => (
        <Link to={`/housing/${card.id}`} className="card-link" key={card.id}>
          <figure className="card">
            <img src={card.cover} alt={card.title} className="card__img" />
            <div className="card__title">
              <figcaption>{card.title}</figcaption>
            </div>
          </figure>
        </Link>
      ))}
    </section>
  )
}

export default Cards
