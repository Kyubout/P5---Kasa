import { Link } from "react-router-dom"
import logoRed from "../../assets/logo/kasa-red.png"
import "./header.scss"

function Header() {
  return (
    <header>
      <nav className="navbar">
        <Link to="/" className="navbar__logo">
          <img src={logoRed} alt="Logo Kasa" />
        </Link>
        <ul className="navbar__menu">
          <li>
            <Link className="navbar__link" to="/">
              Accueil
            </Link>
          </li>
          <li>
            <Link to="/a-propos" className="navbar__link">
              A propos
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
