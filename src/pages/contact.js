import { graphql } from "gatsby"
import React, {useState} from "react"
import Layout from "../components/layout"
import Form from "../components/form"
import Button from "../components/button"
import SEO from "../components/seo"
import styled from "styled-components"
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter"
import { FiMail } from "@react-icons/all-files/fi/FiMail"
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram"

const Contact = ({data}) => {
    const [formIsOpen, setFormIsOpen] = useState(false)
    const { allMarkdownRemark } = data 
    const { frontmatter } = allMarkdownRemark.edges[0].node;
    const {description, title, contactLinks} = frontmatter;

    return (
      <Layout>
        <SEO
          title="Contact"
          keywords={[`writer`]}
        />
        <div></div>
        <div className="rightAlign">
        
        <h2>
          {title}
        </h2>
        <p>{description}</p>
        <div>
          {contactLinks.map(({link, username, title}) =>
             <ContactItem key={title}>
               {title === 'email' 
               ? <p>{username}</p> 
               : <a href={link} target="_blank" rel="noreferrer">{username}</a>
               }
               {title === 'twitter' ? (<FiTwitter />) : title === 'email' ? <FiMail /> :title === 'instagram' ? (<FiInstagram />) : null}

              </ContactItem> 
          )}
      </div>
      <Button 
        onClick={(e) => {
          e.stopPropagation();
          setFormIsOpen(true)
        }}
      >
        Say Hello
      </Button>
      {formIsOpen && (
         <Form handleCloseForm={() => setFormIsOpen(false)}/>
       )}
      </div>
      </Layout>
    )
}
export default Contact

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  p, a {
    padding: 0;
    margin: 0;
  }
  svg {
    font-size: 18px;
    margin-left: .85rem;
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