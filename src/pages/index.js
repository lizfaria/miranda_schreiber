import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Img from "gatsby-image"
import styled from "styled-components"

const IndexPage = ({data}) => {
    const { allMarkdownRemark } = data 
    const { frontmatter } = allMarkdownRemark.edges[0].node;
    const {description, title, image} = frontmatter;

    return (
      <Layout>
        <SEO
          title="Home"
          keywords={[`writer`]}
        />
        <div>
          <ImgContainer>
            <img src={image} alt="Headshot of Rachel Gerry"/>       
          </ImgContainer>
        </div>
       {/* <div>{description}</div> */}
        <p>I am a freelance writer based in Toronto, Canada. My essays on books and
          culture have appeared in The <a>Literary Review of Canada</a>, POV Magazine, Prism
          International, and other venues. Other hats: publishing assistant at Book*hug Press;
          reader at Brick Literary Journal.</p>
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

const ImgContainer = styled.div`
  text-align: right;
  margin-right: 40px;
  @media(max-width: 768px) {
    margin:0 auto;
    text-align: center;
  }
`