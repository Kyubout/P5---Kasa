import Error from "../components/Error/Error"

function Invalid() {
  document.title = "Kasa - Page introuvable"
  return (
    <main>
      <Error />
    </main>
  )
}

export default Invalid
