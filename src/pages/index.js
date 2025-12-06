import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({ data }) => {
  const { allMarkdownRemark } = data
  const { frontmatter } = allMarkdownRemark.edges[0].node
  const { description, title, image } = frontmatter

  const style = {
    maxWidth: "300px",
    borderRadius: "2%",
  }
  return (
    <Layout>
      <SEO
        title="Home"
        keywords={[
          `writer`,
          `activist`,
          `lgbtq`,
          `philosophy`,
          `medicine`,
          `health`,
          `equity`,
        ]}
      />
      <div>
        <img style={style} src={image} alt="Headshot of Miranda Schreiber" />
      </div>
      <p>{description}</p>
    </Layout>
  )
}
export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(filter: { frontmatter: { path: { eq: "/" } } }) {
      edges {
        node {
          frontmatter {
            description
            title
            path
            image
          }
        }
      }
    }
  }
`
