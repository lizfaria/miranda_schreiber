import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Publications = ({data}) => {
    const { allMarkdownRemark } = data 
    const { frontmatter } = allMarkdownRemark.edges[0].node;
    const {description, title, publications} = frontmatter;

    return (
      <Layout>
        <SEO
          title="Publications"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`, `health`, `equity`]}
        />
        <h2>
          {title}
        </h2>
        <p>{description}</p>
        {publications.map(({link, outlet, year, title}) =>
          <p>{year}, {outlet} — <a href={link} target="_blank" rel="noreferrer">{title}</a></p>
        )}
   
      </Layout>
    )
}
export default Publications

export const pageQuery = graphql`
  query PublicationsPageQuery {
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/publications"}}}) {
      edges {
        node {
          frontmatter {
            publications {
              link
              outlet
              title
              year
            }
            title
            path
            description
          }
        }
      }
    }
  }
`;
