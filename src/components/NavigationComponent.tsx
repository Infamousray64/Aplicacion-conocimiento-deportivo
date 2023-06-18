import { NavLink } from 'react-router-dom'
import logo from '../assets/ivo-lg2.png'

export default function NavigationComponent() {
  return (
    <header>
      <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <NavLink
          to="/"
          className="btn btn-link d-flex align-items-center text-dark text-decoration-none"
        >
          <img src={logo} alt="ivo logo" width="53" height="32" />
          <span className="fs-4">IVO | Talents</span>
        </NavLink>

        <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
          <NavLink
            to="login"
            className="btn btn-link me-3 py-2 text-dark text-decoration-none"
          >
            Login
          </NavLink>
          <NavLink className="btn btn-link me-3 py-2 text-dark text-decoration-none">
            Enterprise
          </NavLink>
          <NavLink className="btn btn-link me-3 py-2 text-dark text-decoration-none">
            Chat
          </NavLink>
          <NavLink
            to="pricing"
            className="btn btn-link py-2 text-dark text-decoration-none"
          >
            Pricing
          </NavLink>
        </nav>
      </div>
    </header>
  )
}
