import Slideshow from "../components/Slideshow/Slideshow"
import data from "../data/dataHousing.json"
import { Navigate, useParams } from "react-router-dom"
import Description from "../components/Description/Description"

function Housing() {
  const { housingId } = useParams()
  const currentHousing = data.find((housing) => housing.id === housingId)

  if (!currentHousing) {
    return <Navigate to="/error" />
  }

  document.title = `Kasa - ${currentHousing.title}`

  return (
    <main>
      <Slideshow
        id={currentHousing.id}
        title={currentHousing.title}
        pictures={currentHousing.pictures}
      />
      <Description currentHousing={currentHousing} />
    </main>
  )
}

export default Housing
