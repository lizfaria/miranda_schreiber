import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Listen = ({ data }) => {
  const { allMarkdownRemark } = data
  const { frontmatter } = allMarkdownRemark.edges[0].node;
  const { description, title, listenLink } = frontmatter;

  return (
    <Layout>
      <SEO
        title="Listen"
        keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`, `health`, `equity`]}
      />
      <h2>
        {title}
      </h2>
      <p>{description}</p>

        {listenLink.map(({ link, outlet, publication, year, title, embed }, index) => {
          return (
            <div key={index}>
              <h3>{title}</h3>
              <p>{publication} — {outlet}</p>
              <div className="Container" dangerouslySetInnerHTML={{__html: embed.code}}></div>
            </div>
          )
        })}
  
    </Layout>
  )
}
export default Listen

export const pageQuery = graphql`
  query ListenPageQuery {
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/listen"}}}) {
      edges {
        node {
          frontmatter {
            description
            title
            path
            listenLink {
              link
              outlet
              publication
              title
              year
              embed {
                code
              }
            }
          }
        }
      }
    }
  }
`;