import React from "react"
//import { Link } from "gatsby"

const Footer = () => (
  <footer class="footer">
    <div class="columns">
      <div class="column">
        <h3>TD Climatisation</h3>
        <ul>
          <li>Climatisation</li>
          <li>Chauffage</li>
          <li>Thermopompe</li>
        </ul>
      </div>
      <div class="column">
        <h3>Addresse</h3>
        <ul class="contact">
          <li>
            <span>
              3185 avenue Van Horne
              <br />
              Montreal, H3S 1R3
              <br />
              QC, Canada
            </span>
          </li>
        </ul>
      </div>
      <div class="column">
        <h3>Nous Suivre</h3>
        <ul>
          <li>
            <h3>Email</h3>
            <a href="email:[climatisationtd@gmail.com]">
              climatisationtd@gmail.com
            </a>
          </li>
          <li>
            <h3>Phone</h3>
            <a href="tel:[(123) 456-6789]">(123) 456-6789</a>
          </li>
        </ul>
      </div>
      <div class="column">
        <h3>Social</h3>
        <ul class="icons">
          <li>
            <a href="/#">
              <i class="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a href="/#">
              <i class="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a href="/#">
              <i class="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
