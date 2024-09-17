import Banner from "../components/Banner/Banner"
import bannerAbout from "../assets/banner/banner_about.png"
import Collapse from "../components/Collapse/Collapse"
import { dataAbout } from "../data/dataAbout"

function About() {
  document.title = "Kasa - A propos"
  return (
    <main>
      <Banner
        imageUrl={bannerAbout}
        opacity={"rgba(0, 0, 0, 0.3)"}
        shadow={"none"}
      />
      {dataAbout.map((coll) => (
        <Collapse
          key={coll.title}
          title={coll.title}
          content={<p>{coll.content}</p>}
        />
      ))}
    </main>
  )
}

export default About
