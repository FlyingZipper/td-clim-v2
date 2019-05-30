import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from "../images/logo.svg"
import WorkImg from "../images/index-img.jpeg"

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
    <section className="section is-medium hstrip-mobile">
      <div className="container full-width hstrip">
        <div className="columns full-width vpadding-small bg-lightblue mobile-strip">
          <div className="column vstrip padding-left-medium">
            <div className="third-height">
              <h2 className="blue">
                <i class="fas fa-tools circular-i" /> Entretien annuel
              </h2>
              <div>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                tincidunt, metus id vehicula auctor, lectus nunc mattis nibh,
                vitae facilisis dolor enim vitae ipsum. Nullam pharetra lacus
                vitae est mollis malesuada.
              </div>
            </div>
            <div className="third-height">
              <h2 className="blue">
                <i class="fas fa-home circular-i" /> Meilleurs produits sur le
                marché
              </h2>
              <div>
                Mauris consectetur, orci non suscipit tincidunt, leo dui
                imperdiet orci, ut convallis lorem diam ac nulla. Aenean porta
                placerat magna. Suspendisse potenti.
              </div>
            </div>
            <div className="third-height">
              <h2 className="blue">
                <i class="fas fa-user circular-i" /> Techniciens qualifiés
              </h2>
              <div>
                Ut eleifend risus neque, eget lacinia nunc ullamcorper vel. Cras
                accumsan, lorem quis vulputate accumsan, ante nisl tincidunt
                purus, at hendrerit arcu odio id sem.
              </div>
            </div>
          </div>
          <div className="column vstrip mobile-hide">
            <img src={WorkImg} alt="" />
          </div>
        </div>
      </div>
    </section>
    {/* <section className="section teal is-medium">
      <div className="container">
        <h1 className="title promote white">
          <i class="fas fa-calendar-check" />
          Programme d’entretien annuel
        </h1>
        <h2 className="subtitle promote white">
          Des solutions globales personnalisées par des spécialistes du
          traitement de l’air et du froid en fonction de vos besoins et de la
          taille de votre maison ou de votre condo. Que ce soit pour un air
          conditionné, une thermopompe murale ou centrale, un système biénergie,
          un échangeur d’air, un projet de géothermie et bien plus, laissez-nous
          allier confort et économie d’énergie à vos projets. Prolonge la durée
          de votre système
        </h2>
      </div>
    </section>
    <section className="section is-medium">
      <div className="container">
        <h1 className="title">
          ClimatisationTD est le choix responsable pour vorte air climatisé,
          thermopompe, chauffage. Résidentiel et commercial
        </h1>
        <h2 className="subtitle">
          Yet another simple container to divide your page into{" "}
          <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
    <section className="section orange is-medium">
      <div className="container">
        <h1 className="title promote white">
          <i class="fas fa-calendar-check" />
          Service 24h en cas d’urgence
        </h1>
        <h2 className="subtitle promote white">
          Des solutions globales personnalisées par des spécialistes du
          traitement de l’air et du froid en fonction de vos besoins et de la
          taille de votre maison ou de votre condo. Que ce soit pour un air
          conditionné, une thermopompe murale ou centrale, un système biénergie,
          un échangeur d’air, un projet de géothermie et bien plus, laissez-nous
          allier confort et économie d’énergie à vos projets. Prolonge la durée
          de votre système
        </h2>
        <div className="center-content">
          <Link className="button is-large is-rounded" to="/soumission">
            Demande de soumission
          </Link>
        </div>
      </div>
    </section> */}
  </Layout>
)

export default IndexPage
