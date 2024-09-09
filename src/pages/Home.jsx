import Banner from "../components/Banner/Banner"
import bannerHome from "../assets/banner/banner_home.png"
import Cards from "../components/Cards/Cards"

function Home() {
  document.title = "Kasa - Chez vous, partout et ailleurs"
  return (
    <main>
      <Banner
        imageUrl={bannerHome}
        title={"Chez vous, partout et ailleurs"}
        opacity={"rgba(0, 0, 0, 0.6)"}
        shadow={"0px 4px 4px rgba(0, 0, 0, 0.5)"}
      />
      <Cards />
    </main>
  )
}

export default Home
