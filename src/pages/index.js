import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => {
    const siteTitle = "Miranda Schreiber Personal Website"

    return (
      <Layout>
        <SEO
          title="Miranda Schreiber"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`, `health`, `equity`]}
        />
        <h1>
          Miranda Schreiber
        </h1>
        <p>Miranda Schreiber is a Toronto-based writer, researcher, and advocate for 2SLGBTQ+ health equity.</p>
        <img src="" alt="" />
      </Layout>
    )
}
export default IndexPage
