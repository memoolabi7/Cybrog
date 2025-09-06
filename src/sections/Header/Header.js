import { Link } from 'react-router-dom'

import './Header.css'
import logo from '../../assets/images/logo.png'
import NavItem, {NavItemDropDown} from '../../components/NavItem/NavItem'

const Header = () => {
  return (
    <>
      <div className="navbar navbar-expand-md bg-dark navbar-dark cybrog-navbar">
          <div className="container">
              <Link to="/" className="navbar-brand">
                <img src={logo} alt="" />
              </Link>

              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainmenu">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="mainmenu">
                  <ul className="navbar-nav ms-auto">
                      <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
                      <NavItemDropDown>
                          <Link to="/" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">FAQ</Link>
                          <ul className="dropdown-menu">
                              <li><a href="#question-1" className="dropdown-item">How to download games?</a></li>
                              <li><a href="#question-2" className="dropdown-item">How to publish games?</a></li>
                              <li><a href="#question-3" className="dropdown-item">How to contact?</a></li>
                          </ul>
                      </NavItemDropDown>
                      <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>
                  </ul>
              </div>
          </div>
      </div>
    </>
  )
}

export default Header
