import { data } from "../../data.json"
import { Link } from "react-router-dom"

// ;<figure key={id}>
//   <img src={cover} alt={title} />
//   <figcaption>{title}</figcaption>
// </figure>

function Card() {
  let obj = JSON.parse(data)
  return (
    <section>
      {obj.map((data) => (
        <figure key={data.id}>
          <Link to={`/housing/${data.id}`}>
            <img src={data.cover} alt={data.title} />
          </Link>
          <figcaption>{data.title}</figcaption>
        </figure>
      ))}
    </section>
  )
}

export default Card
