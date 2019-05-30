import React from "react"
//import { Link } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

const Chauffage = () => (
  <Layout>
    <SEO title="Chauffage" />
    <section className="section is-medium">
      <div className="container">
        <h1 className="title">Chauffage</h1>
        <h2 className="subtitle">
          Yet another simple container to divide your page into{" "}
          <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
    <section className="section is-medium">
      <div className="container">
        <h1 className="title">Section</h1>
        <h2 className="subtitle">
          Yet another simple container to divide your page into{" "}
          <strong>sections</strong>, like the one you're currently reading
        </h2>
      </div>
    </section>
  </Layout>
)

export default Chauffage
