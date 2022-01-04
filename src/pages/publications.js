import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const Publications = ({data}) => {
    // const { allMarkdownRemark } = data 
    // const { frontmatter } = allMarkdownRemark.edges[0].node;
    // const {description, title, publications} = frontmatter;

    return (
      <Layout>
        <SEO
          title="Publications"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`, `health`, `equity`]}
        />
        <div></div>
        <div className="rightAlign">
          {/* <h2>
            {title}
          </h2>
          <p>{description}</p>
          {publications.map(({link, outlet, year, title}) =>
            <p>{year}, {outlet} — <a href={link} target="_blank" rel="noreferrer">{title}</a></p>
          )} */}
          <section>
          <h2>Selected Writing</h2>
            {/* if quote */}
            <h3><a href="https://povmagazine.com/coming-soon-issue-115">Harmonious Landscapes: Documentary and Ecofeminist Cinema</a></h3>
            <p className="italic">For Baichwal, when art is functioning properly it is like a Kantian truth “that thing in itself” which cannot be reduced anymore, which “holds whatever universality is possible.”</p>
            {/* if not quote */}

             {/* if quote */}
             <h3><a href="https://povmagazine.com/coming-soon-issue-115">Harmonious Landscapes: Documentary and Ecofeminist Cinema</a></h3>
            <p className="italic">For Baichwal, when art is functioning properly it is like a Kantian truth “that thing in itself” which cannot be reduced anymore, which “holds whatever universality is possible.”</p>
            {/* if not quote */}

             {/* if quote */}
             <h3><a href="https://povmagazine.com/coming-soon-issue-115">Harmonious Landscapes: Documentary and Ecofeminist Cinema</a></h3>
            <p className="italic">For Baichwal, when art is functioning properly it is like a Kantian truth “that thing in itself” which cannot be reduced anymore, which “holds whatever universality is possible.”</p>
            {/* if not quote */}
          </section>
          <section>
          <h2>By Publication</h2>
            {/* if quote */}
            <h3 style={{marginBottom:0}}>The Literary Review of Canada</h3>
            <p><a href="https://reviewcanada.ca/magazine/2021/11/the-malaria-guru/">The Malaria Guru</a></p>
            <p><a href="https://reviewcanada.ca/magazine/2021/11/the-malaria-guru/">The Malaria Guru</a></p>
            <p><a href="https://reviewcanada.ca/magazine/2021/11/the-malaria-guru/">The Malaria Guru</a></p>
            <Space />

            {/* if not quote */}

            {/* if quote */}
            <h3 style={{marginBottom:0}}>The Literary Review of Canada</h3>
            <p><a href="https://reviewcanada.ca/magazine/2021/11/the-malaria-guru/">The Malaria Guru</a></p>
            <p><a href="https://reviewcanada.ca/magazine/2021/11/the-malaria-guru/">The Malaria Guru</a></p>
            <p><a href="https://reviewcanada.ca/magazine/2021/11/the-malaria-guru/">The Malaria Guru</a></p>
            <Space />
            {/* if not quote */}
          </section>

          
        </div>
        
   
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

const Space = styled.div`
  margin-bottom: 16px;
`