import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


const Contact = () => {
  const siteTitle = "Miranda Schreiber Personal Website"

  return (
    <Layout>
      <SEO
        title="contact"
        keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`]}
      />
      <h1>
        Contact
        </h1>
      <p>Paragraph Content</p>
      <p>email and social media links</p>
    </Layout>
  )
}

export default Contact
