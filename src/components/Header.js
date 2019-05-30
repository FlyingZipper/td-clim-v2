import React from "react"
import Logo from "../images/logo.svg"

import { Link } from "gatsby"

const Header = () => (
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
      </div>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true" />
        <span aria-hidden="true" />
        <span aria-hidden="true" />
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link is-arrowless">Services</a>

          <div class="navbar-dropdown">
            <a class="navbar-item">
              <Link to="services/climatisation">Climatisation</Link>
            </a>
            <a class="navbar-item">
              <Link to="services/chauffage">Chauffage</Link>
            </a>
            <a class="navbar-item">
              <Link to="services/thermopompe">Thermopompe</Link>
            </a>
          </div>
        </div>

        <a class="navbar-item">
          <Link to="/entretien">Entretien</Link>
        </a>

        <a class="navbar-item">
          <Link to="/about">A propos</Link>
        </a>

        <a class="navbar-item">
          <Link to="/jobs">Carriere</Link>
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <Link to="/soumission">
            <div class="buttons">
              <a class="button">Demande de soumission</a>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
