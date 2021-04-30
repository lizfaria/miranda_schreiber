import { graphql } from "gatsby"
import React, { useState } from "react"
import axios from "axios"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"
import { FiTwitter } from "@react-icons/all-files/fi/FiTwitter"
import { FiMail } from "@react-icons/all-files/fi/FiMail"

const Contact = ({data}) => {
    const { allMarkdownRemark } = data 
    const { frontmatter } = allMarkdownRemark.edges[0].node;
    const {description, title, contactLinks} = frontmatter;
    const [serverState, setServerState] = useState({
      submitting: false,
      status: null
    });

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

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: process.env.GETFORM_URL,
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  const formSubmitting = serverState.status?.submitting === true

    return (
      <Layout>
        <SEO
          title="Contact"
          keywords={[`writer`, `activist`, `lgbtq`, `philosophy`, `medicine`, `health`, `equity`]}
        />
        <h2>
          {title}
        </h2>
        <p>{description}</p>
        
          {contactLinks.map(({link, username, title}) =>
             <ContactItem>
               {title === 'twitter' ? (<FiTwitter />) : title === 'email' ? <FiMail /> : null}
               {title === 'email' 
               ? <p>{username}</p> 
               : <a href={link} target="_blank" rel="noreferrer">{username}</a>
               }
              </ContactItem> 
          )}
      

        <Form onSubmit={handleOnSubmit}>
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
          <button disabled={formSubmitting} aria-busy={formSubmitting} type="submit">{
            formSubmitting
            ? 'Submitting'
            : serverState.status?.ok
            ? 'Message Sent' 
            : 'Send Message'}</button>
        </Form>
        
      </Layout>
    )
}
export default Contact

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  p, a {
    padding: 0;
    margin: 0;
    margin-left: .85rem;
  }
  svg {
    font-size: 18px;
  }
`


const Form = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border-top: 1px solid black;
  fieldset {
    position: relative;
    margin: 0;
    padding: 0;
    border: none;
    &:focus-within {
      border-top: none;
      box-shadow: none;
    }
  };
  label {
    position: absolute;
    left: 1.25rem;
    right: 1.25rem;
    top: 1.25rem;
    bottom: 1.25rem;
    width: 100%;
    transition: all 0.2s ease-in-out; 
  };
  label.filled {
      left: 1.25rem;
      right: 0;
      top: 0;
      bottom: 0;
      font-size: 0.75rem;
      color: #4f4c72; 
  }
  input, textArea {
    z-index: 1;
    padding: 1.5rem 1.25rem;
    width: 100%;
    border-top: 1px solid transparent;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    transition: all .3s ease-out;
    &:focus {
      border-top: 1px solid black;
      box-shadow: none;
      border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black;
    }
  };
  button {
    padding: 1.25rem;
    border: 1px solid #000;
    background-color: #fff;
    cursor: pointer;
    margin-top: 1.25rem;
    transition: all .2s ease-in-out;
    &:hover {
      background-color: #335C67;
      color: white;
    }
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