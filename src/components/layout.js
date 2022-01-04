import React from "react"
import styled from "styled-components"
import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <Wrapper>
        <Nav />
        <Main>{children}</Main>
    </Wrapper>
  )
}

const Main = styled.main`
  width: calc(100%);
  /* padding: 3.5rem 40px 40px; */
  margin-left: 260px;
  
  @media(max-width: 768px) {
    margin-left: 0;
    padding: 0;
  }
  /* @media(min-width: 768px) {
    max-width: 468px;
  } */
  @media(min-width: 768px) {
    /* max-width: 600px; */
    display: flex;
    & > * {
      width: 50%;
    }
  }
  .rightAlign {
    text-align: right;
  }
  a {
    color: #5a8ebf;
    text-decoration: none;
    box-shadow: none;
    transition: all 0.3s ease-out;
    line-height: 1.3em;
    font-family: Libre Caslon Text, serif;
    font-size: 14px;
    text-transform: none;
    letter-spacing: 0em;
    &:hover {
      color: #0bf;
    }
  };
  h1 {
    font-family: Signika, sans-serif;   
    margin-top: 0; 
  }
  h2, h3 {
    font-family: Libre Caslon Text, serif;    
  }
  h2 {
    font-size: 30px;
    font-style: italic;
    margin-bottom: 2rem;
    letter-spacing: 1.5px;
    font-weight: 400;
  }
  h3 {
    font-size: 14px;
    margin-bottom: 16px;
    letter-spacing: 0em;
    line-height: 1.2em;
    font-style: normal;
    font-weight: 700;
    letter-spacing: normal;
    line-height: 21.6px;
    overflow-wrap: break-word;
    text-align: right;
    text-transform: none;
    white-space: pre-wrap
    & a {
    font-weight: 700;

    }
  }
  h1, h2, h3 {
    margin-top: 0;
    color: #000;
  }
  p, label, input {
    /* font-style: italic;  */
    font-family: Libre Caslon Text, serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 1.3em;
    text-transform: none;
    letter-spacing: 0em;
    &.italic { 
      font-style: italic;
      line-height: 1.2em;
      font-weight: 300;
      font-style: italic;
      letter-spacing: normal;
      line-height: 21.6px;
      overflow-wrap: break-word;
      text-transform: none;
      white-space: pre-wrap
    }
  }
  section {
    margin-bottom: 60px;
    p {
      margin-bottom: 0;
    }
    p.italic {
      margin-bottom: 16px;
    }
  }
`

const Wrapper = styled.div`
  background-color: #f5f5f5;
  min-height: 100vh;
  padding: 60px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  @media (max-width: 768px) {
    display: block;
    padding: 20px;
   };
  color: #01020A;
`


export default Layout
