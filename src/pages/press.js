import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Press = ({data}) => {
    const { allMarkdownRemark } = data 
    const { frontmatter } = allMarkdownRemark.edges[0].node;
    const {description, title, press} = frontmatter;

    return (
      <Layout>
        <SEO
          title="Miranda Schreiber Press"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`, `health`, `equity`]}
        />
        <h1>
          {title}
        </h1>
        <p>{description}</p>
        <ul>
          {press.map(({link, publisher, year, title}) =>
            <li>
              <a href={link} target="_blank" rel="noreferrer">{title}</a>
              <p>{publisher}</p>
              <p>{year}</p>
            
            </li>
          )}
        </ul>
      </Layout>
    )
}
export default Press

export const pageQuery = graphql`
  query PressPageQuery {
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/press"}}}) {
      edges {
        node {
          frontmatter {
            press {
              link
              publisher
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