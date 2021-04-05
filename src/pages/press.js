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
        <h2>
          {title}
        </h2>
        <p>{description}</p>
        {press.map(({link, publisher, year, title}) =>
          <p><span>{publisher}</span>, <span>{year}</span> — <span><a href={link} target="_blank" rel="noreferrer">{title}</a></span></p>
        )}

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