import React from "react"
import Logo from "../images/logo.svg"

const Header = () => (
  <nav class="navbar is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item" href="https://bulma.io">
        <img src={Logo} alt="" />
      </a>

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
            <a class="navbar-item">Climatisation</a>
            <a class="navbar-item">Chauffage</a>
            <a class="navbar-item">Thermopompe</a>
          </div>
        </div>

        <a class="navbar-item">Entretien</a>

        <a class="navbar-item">A propos</a>

        <a class="navbar-item">Carriere</a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button">Demande de soumission</a>
          </div>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
