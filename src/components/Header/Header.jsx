import { Link, NavLink } from "react-router-dom"
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
            <NavLink className="navbar__link" activeclassname="active" to="/">
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/a-propos"
              className="navbar__link"
              activeclassname="active"
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
