import Banner from "../components/Banner/Banner"
import bannerAbout from "../assets/banner/banner_about.png"

function About() {
  document.title = "Kasa - A propos"
  return (
    <main>
      <Banner imageUrl={bannerAbout} opacity={"rgba(0, 0, 0, 0.3)"} />
    </main>
  )
}

export default About
