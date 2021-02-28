import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Press = () => {
    const siteTitle = "Miranda Schreiber Personal Website"

    return (
      <Layout>
        <SEO
          title="press"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`]}
        />
        <h1>
          Selected Press
        </h1>
        <p>Paragraph Content</p>
        <p>List of Press Releases</p>
      </Layout>
    )
}

export default Press
