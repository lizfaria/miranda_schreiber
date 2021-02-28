import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Publications = () => {
  const siteTitle = "Miranda Schreiber Personal Website"

  return (
    <Layout>
      <SEO
        title="writing"
        keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`]}
      />
      <h1>
        selected publications
        </h1>
      <p>Paragraph Content</p>
      <p>Links to written articles / essays / blog posts</p>
    </Layout>
  )
}

export default Publications
