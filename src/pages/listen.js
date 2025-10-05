import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

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
      <header>
        <h2>
          {title}
        </h2>
      </header>
      <p>{description}</p>

        {listenLink.map(({ link, outlet, publication, year, title, embed }, index) => {
          return (
            <div key={index}>
              <h3>{title}</h3>
              <p>{publication} — {outlet}</p>
              {embed?.code && (
                  <Video>
                    <div className="Container" dangerouslySetInnerHTML={{__html: embed.code}}></div>
                  </Video>
              )}
            </div>
          )
        })}
  
    </Layout>
  )
}
export default Listen

const Video = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
`

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