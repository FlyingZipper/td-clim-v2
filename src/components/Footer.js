import React from "react"
import { Link } from "gatsby"

const Footer = () => (
  <footer className="footer">
    <div className="columns">
      <div className="column">
        <h3>TD Climatisation</h3>
        <ul>
          <li>
            <Link to="/services/climatisation">Climatisation</Link>
          </li>
          <li>
            <Link to="/services/chauffage">Chauffage</Link>
          </li>
          <li>
            <Link to="/services/thermopompe">Thermopompe</Link>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Addresse</h3>
        <ul className="contact">
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
      <div className="column">
        <h3>Nous Suivre</h3>
        <ul>
          <li>
            <h3>Email</h3>
            <a
              href="mailto:climatisationtd@gmail.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              climatisationtd@gmail.com
            </a>
          </li>
          <li>
            <h3>Phone</h3>
            <a href="tel:[(123) 456-6789]">(123) 456-6789</a>
          </li>
        </ul>
      </div>
      <div className="column">
        <h3>Social</h3>
        <ul className="icons">
          <li>
            <a
              href="https://www.facebook.com/climatisationTD/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-facebook-f" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/climatisationTD/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/climatisationTD/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
)

export default Footer
