import Banner from "../components/Banner/Banner"
import bannerAbout from "../assets/banner/banner_about.png"
import Collapsible from "../components/Collapsible/Collapsible"
import { dataAbout } from "../data/dataAbout"

function About() {
  document.title = "Kasa - A propos"
  return (
    <main>
      <Banner imageUrl={bannerAbout} opacity={"rgba(0, 0, 0, 0.3)"} />
      {dataAbout.map((coll) => (
        <Collapsible
          key={coll.title}
          title={coll.title}
          content={coll.content}
        />
      ))}
    </main>
  )
}

export default About
