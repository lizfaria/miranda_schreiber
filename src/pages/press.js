import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


class Press extends React.Component {
  render() {
    const siteTitle = "Miranda Schreiber Personal Website"

    return (
      <Layout>
        <SEO
          title="press"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`]}
        />
        <h1>
          Press
        </h1>
        <p>Paragraph Content</p>
        <p>List of Press Releases</p>
      </Layout>
    )
  }
}

export default Press
