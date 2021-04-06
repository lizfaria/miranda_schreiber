import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"

const IndexPage = ({data}) => {
    const { allMarkdownRemark } = data 
    const { frontmatter } = allMarkdownRemark.edges[0].node;
    const {description, title, image} = frontmatter;

    return (
      <Layout>
        <SEO
          title="Miranda Schreiber"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`, `health`, `equity`]}
        />
        <img className="image" src={image} alt="Headshot of Miranda Schreiber"/> 
       <p>{description}</p>

      </Layout>
    )
}
export default IndexPage

export const pageQuery = graphql`
  query HomePageQuery {
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/"}}}) {
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
`;

