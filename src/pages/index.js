import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const IndexPage = () => {
    const siteTitle = "Miranda Schreiber Personal Website"

    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`]}
        />
        <h1>
          Miranda Schreiber
        </h1>
        <p>Subtitle about Miranda</p>
      </Layout>
    )
}

export default IndexPage
