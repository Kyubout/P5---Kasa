import Banner from "../components/Banner/Banner"
import bannerHome from "../assets/banner/banner_home.png"
import Cards from "../components/Cards/Cards"

function Home() {
  document.title = "Kasa - Chez vous, partout et ailleurs"
  return (
    <main>
      <Banner
        imageUrl={bannerHome}
        title={
          <>
            Chez vous, <span>partout et ailleurs</span>
          </>
        }
        opacity={"rgba(0, 0, 0, 0.6)"}
      />
      <Cards />
    </main>
  )
}

export default Home
