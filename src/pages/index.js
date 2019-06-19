import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <section className="hero is-large">
      <div className="hero-body vh lighter">
        <div className="container has-text-centered">
          <h1 className="title primary">
            <img src={Logo} alt="" />
            TD Climatisation
          </h1>
          <h2 className="subtitle white">Le confort chez vous</h2>
        </div>
      </div>
    </section>
    <section className="section no-padding">
      <div className="container">
        <div className="columns services is-vcentered">
          <Link className="column climatisation" to="/services/climatisation">
            <i className="fas fa-snowflake" />
            <div>Climatisation</div>
          </Link>
          <Link className="column chauffage" to="/services/chauffage">
            <i className="fab fa-gripfire" />
            <div>Chauffage</div>
          </Link>
          <Link className="column thermopompe" to="/services/thermopompe">
            <i className="fas fa-home" />
            <div>Thermopompe</div>
          </Link>
        </div>
      </div>
    </section>
    <section className="section is-medium">
      <div className="container">
        <h1 className="title promote blue">Un service complet</h1>
        <div className="promote">
          Des solutions globales personnalisées par des spécialistes du
          traitement de l’air et du froid en fonction de vos besoins et de la
          taille de votre maison ou de votre condo. Que ce soit pour un air
          conditionné, une thermopompe murale ou centrale, un système biénergie,
          un échangeur d’air, un projet de géothermie et bien plus, laissez-nous
          allier confort et économie d’énergie à vos projets.
        </div>
      </div>
    </section>
    <section className="section is-medium" >
      <p>hi</p>
    </section>
  </Layout>
)

export default IndexPage
