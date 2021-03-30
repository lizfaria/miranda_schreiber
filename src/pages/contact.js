import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Contact = ({data}) => {
    const { allMarkdownRemark } = data 
    const { frontmatter } = allMarkdownRemark.edges[0].node;
    const {description, title, contactLinks} = frontmatter;

    return (
      <Layout>
        <SEO
          title="Contact Miranda Schreiber"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`, `health`, `equity`]}
        />
        <h1>
          {title}
        </h1>
        <p>{description}</p>
        <ul>
          {contactLinks.map(({link, username, title}) =>
            <li>
              <a href={link} target="_blank" rel="noreferrer">{title}</a>
              <p>{username}</p>
            </li>
          )}
        </ul>

        <form method="post" action="https://getform.io/{your-unique-getform-endpoint}">
          <label>
            Name
            <input type="text" name="name" id="name" />
          </label>
          <label>
            Email
            <input type="email" name="email" id="email" />
          </label>
          <label>
            Subject
            <input type="text" name="subject" id="subject" />
          </label>
          <label>
            Message
            <textarea name="message" id="message" rows="5" />
          </label>
          <button type="submit">Send</button>
        </form>
      </Layout>
    )
}
export default Contact

export const pageQuery = graphql`
  query ContactPageQuery {
    allMarkdownRemark(filter: {frontmatter: {path: {eq: "/contact"}}}) {
      edges {
        node {
          frontmatter {
            contactLinks {
              link
              title
              username
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