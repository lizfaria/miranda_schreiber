import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"


class Contact extends React.Component {
  render() {
    const siteTitle = "Miranda Schreiber Personal Website"

    return (
      <Layout>
        <SEO
          title="contact"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`]}
        />
        <h1>
          Contaact
        </h1>
        <p>Paragraph Content</p>
        <p>email and social media links</p>
      </Layout>
    )
  }
}

export default Contact
