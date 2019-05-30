/* eslint-disable */
import React from "react"
import Logo from "../images/logo.svg"

import { Link } from "gatsby"

const Header = () => (
  <nav
    className="navbar is-spaced"
    role="navigation"
    aria-label="main navigation"
  >
    <div className="navbar-brand">
      <div className="navbar-item">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <a
        role="button"
        className="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" className="navbar-menu">
      <div className="navbar-start">
        <div className="navbar-item has-dropdown is-hoverable">
          <a className="navbar-link is-arrowless">Services</a>

          <div className="navbar-dropdown">
            <Link className="navbar-item" to="/services/climatisation">
              Climatisation
            </Link>
            <Link className="navbar-item" to="/services/chauffage">
              Chauffage
            </Link>
            <Link className="navbar-item" to="/services/thermopompe">
              Thermopompe
            </Link>
          </div>
        </div>

        <Link className="navbar-item" to="/entretien">
          Entretien
        </Link>

        <Link className="navbar-item" to="/about">
          A propos
        </Link>

        <Link className="navbar-item" to="/jobs">
          Carriere
        </Link>
      </div>

      <div className="navbar-end">
        <div className="navbar-item">
          <div className="buttons">
            <Link className="button primary" to="/soumission">
              Demande de soumission
            </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
