import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter"

const Contact = ({data}) => {
    const { allMarkdownRemark } = data 
    const { frontmatter } = allMarkdownRemark.edges[0].node;
    const {description, title, contactLinks} = frontmatter;
  const handleClick = (e) => {
    return e.target.value.length > 0 ?
    e.target.nextElementSibling.classList.add('filled')
    : e.target.nextElementSibling.classList.remove('filled')
  }
  const handleFocus = (e) => {
    return e.target.nextElementSibling.classList.add('filled')
  }
  const handleBlur = (e) => {
    return e.target.value.length <= 0 ? 
    e.target.nextElementSibling.classList.remove('filled')
    : null
  }
    return (
      <Layout>
        <SEO
          title="Contact Miranda Schreiber"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`, `health`, `equity`]}
        />
        <h2>
          {title}
        </h2>
        <p>{description}</p>
        
          {contactLinks.map(({link, username, title}) =>
             <div>{link.split('.').includes('twitter') && (<FiTwitter />)}<a href={link} target="_blank" rel="noreferrer">{username}</a></div> 
          )}
      

        <Form method="post" action="https://getform.io/{your-unique-getform-endpoint}">
          <fieldset>
            <input type="text" name="name" id="name" required onChange={e => handleClick(e)} onFocus={e => handleFocus(e) } onBlur={e => handleBlur(e) }/>
            <label htmlFor="name">Name</label>
          </fieldset>
          <fieldset> 
            <input type="email" name="email" id="email" required onChange={e => handleClick(e)} onFocus={e => handleFocus(e) } onBlur={e => handleBlur(e) }/>
            <label htmlFor="email">Email</label>
          </fieldset>
          <fieldset> 
            <textarea name="message" id="message" rows="5" required onChange={e => handleClick(e)} onFocus={e => handleFocus(e) } onBlur={e => handleBlur(e) }/>
            <label htmlFor="message">Message</label>
          </fieldset>
          <button type="submit">Send Message</button>
        </Form>
      </Layout>
    )
}
export default Contact



const Form = styled.form`
margin-top: 2rem;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  fieldset {
    position: relative;
    margin: 0;
    padding: 0;

  };
  label {
    position: absolute;
    left: .85rem;
    right: .85rem;
    top: .85rem;
    bottom: 0;
    width: 100%;
    transition: all 0.2s ease-in-out; 
  };
  label.filled {
      top: 0;
      font-size: 0.75rem;
      color: #355F56; 
  }
  input, textArea {
    z-index: 1;
    padding: 1rem;
    width: 100%;
    border: none;
  };
  button {
    padding: 1rem;
    border: 1px solid #000;
    background-color: #fff;
    cursor: pointer;
    margin-top: 1rem;
  }
`


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