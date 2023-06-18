import { Link, NavLink, useOutlet } from 'react-router-dom'
import logo from '../assets/ivo-lg2.png'
import {
  AiOutlineFile,
  AiOutlineFileText,
  AiOutlineHome,
  AiOutlineShoppingCart,
} from 'react-icons/ai'
import { FiUsers } from 'react-icons/fi'
import { BiLineChart } from 'react-icons/bi'
import { SlLayers } from 'react-icons/sl'
import { ImVideoCamera } from 'react-icons/im'
import { BsChatLeftText } from 'react-icons/bs'
import { useUserContext } from '../services/UserStore'
import DashBoardComponent from '../components/admin/DasboardComponent'

export default function AdminLayout() {
  const [user] = useUserContext()
  console.log(user)
  const outlet = useOutlet()
  return (
    <>
      <main className="admin-pages">
        <header className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0 shadow">
          <Link to="/" className="navbar-brand col-md-3 col-lg-2 me-0 px-3">
            <img className="admin-brand-logo" src={logo} alt="" /> IVO | Talents
          </Link>
          <button
            className="navbar-toggler position-absolute d-xl-none collapsed"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#sidebarMenu"
            aria-controls="sidebarMenu"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <input
            className="form-control w-100"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div className="navbar-nav">
            <div className="nav-item text-nowrap">
              <Link className="nav-link px-3" to="/">
                Sign out
              </Link>
            </div>
          </div>
        </header>

        <div className="container-fluid">
          <div className="row">
            <nav
              id="sidebarMenu"
              className="col-md-3 col-lg-2 d-md-block bg-light sidebar collapse"
            >
              <div className="position-sticky pt-3">
                <ul className="nav flex-column">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/admin">
                      <span className="dashboard-menu-icon">
                        <AiOutlineHome />
                      </span>
                      Dashboard
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      <span className="dashboard-menu-icon">
                        <AiOutlineFile />
                      </span>
                      Orders
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      <span className="dashboard-menu-icon">
                        <AiOutlineShoppingCart />
                      </span>
                      Products
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      <span className="dashboard-menu-icon">
                        <FiUsers />
                      </span>
                      Customers
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      <span className="dashboard-menu-icon">
                        <BiLineChart />
                      </span>
                      Reports
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      <span className="dashboard-menu-icon">
                        <SlLayers />
                      </span>
                      Integrations
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="chat">
                      <span className="dashboard-menu-icon">
                        <BsChatLeftText />
                      </span>
                      Support Chat
                    </NavLink>
                  </li>
                </ul>

                <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                  <span>Saved Castings</span>
                  <NavLink
                    className="link-secondary"
                    to="/"
                    aria-label="Add a new report"
                  >
                    <span className="dashboard-menu-icon">
                      <ImVideoCamera />
                    </span>
                  </NavLink>
                </h6>
                <ul className="nav flex-column mb-2">
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      <span className="dashboard-menu-icon">
                        <AiOutlineFileText />
                      </span>
                      Current month
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      <span className="dashboard-menu-icon">
                        <AiOutlineFileText />
                      </span>
                      Last quarter
                    </Link>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      <span className="dashboard-menu-icon">
                        <AiOutlineFileText />
                      </span>
                      Social engagement
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/">
                      <span className="dashboard-menu-icon">
                        <AiOutlineFileText />
                      </span>
                      Year-end sale
                    </NavLink>
                  </li>
                </ul>
              </div>
            </nav>
            {outlet || <DashBoardComponent />}
          </div>
        </div>
      </main>
    </>
  )
}
