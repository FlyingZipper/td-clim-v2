import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section class="hero is-large">
      <div class="hero-body lighter">
        <div class="container has-text-centered">
          <h1 class="title primary">
            <img src={Logo} alt="" />
            TD Climatisation
          </h1>
          <h2 class="subtitle white">Le confort chez vous</h2>
        </div>
      </div>
    </section>
    <section class="section no-padding">
      <div class="container">
        <div class="columns services is-vcentered">
          <Link class="column climatisation" to="services/climatisation">
            <i class="fas fa-snowflake" />
            <div>Climatisation</div>
          </Link>
          <Link class="column chauffage" to="services/chauffage">
            <i class="fab fa-gripfire" />
            <div>Chauffage</div>
          </Link>
          <Link class="column thermopompe" to="services/thermopompe">
            <i class="fas fa-home" />
            <div>Thermopompe</div>
          </Link>
        </div>
      </div>
    </section>
    <section class="section is-medium">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          Yet another simple container to divide your page into{" "}
          <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
    <section class="section is-medium">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          Yet another simple container to divide your page into{" "}
          <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
    <section class="section is-medium">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          Yet another simple container to divide your page into{" "}
          <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
    <section class="section is-medium">
      <div class="container">
        <h1 class="title">Section</h1>
        <h2 class="subtitle">
          Yet another simple container to divide your page into{" "}
          <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
  </Layout>
)

export default IndexPage
