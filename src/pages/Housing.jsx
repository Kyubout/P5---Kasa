import Slideshow from "../components/Slideshow/Slideshow"
import data from "../data/dataHousing.json"
import Collapse from "../components/Collapse/Collapse"
import { useParams } from "react-router-dom"

function Housing() {
  const { housingId } = useParams()
  const currentHousing = data.find((housing) => housing.id === housingId)

  document.title = `Kasa - ${currentHousing.title}`

  return (
    <main>
      <Slideshow
        id={currentHousing.id}
        title={currentHousing.title}
        pictures={currentHousing.pictures}
      />
      <Collapse title="Description" content={currentHousing.description} />
    </main>
  )
}

export default Housing
