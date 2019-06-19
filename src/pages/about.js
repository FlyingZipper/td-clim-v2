import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import WorkImg from "../images/index-img.jpeg"

const About = () => (
  <Layout>
    <SEO title="A Propos" />
    <h1>A Propos</h1>
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
  </Layout>
)

export default About
