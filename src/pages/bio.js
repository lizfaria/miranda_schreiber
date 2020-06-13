import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


class Bio extends React.Component {
  render() {
    const siteTitle = "Miranda Schreiber Personal Website"

    return (
      <Layout>
        <SEO
          title="about"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`]}
        />
        <h1>
          About
        </h1>
        <p>Paragraph Content</p>
      </Layout>
    )
  }
}

export default Bio
