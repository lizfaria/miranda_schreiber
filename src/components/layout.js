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
  padding: 3.5rem 40px 40px;
  margin-left: 260px;
  @media(max-width: 768px) {
    margin-left: 0;
    padding: 0;
  }
  @media(min-width: 768px) {
    max-width: 468px;
  }
  @media(min-width: 920px) {
    max-width: 600px;
  }
  a {
    color: #1976d2;
    border-bottom: 1px dotted #1976d2;
    text-decoration: none;
    box-shadow: none;
    transition: all 0.3s ease-out;
    &:hover {
      color: #275475;
      border-bottom: 1px solid #275475;
    }
  };
  h2, h3 {
    font-family: Montserrat,sans-serif;
    font-weight: 500;
    text-transform: uppercase;
    color: #d32f2f;

  }
  h2 {
    font-size: 1.2rem;
    margin-bottom: 4rem;
    letter-spacing: 1.5px;
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    letter-spacing: 1px;

  }
  h1, h2, h3 {
    margin-top: 0;
  }
`

const Wrapper = styled.div`
  background-color: #FBFFFE;
  min-height: 100vh;
  padding: 40px;
  display: flex;
  justifyContent: flex-start;
  alignItems: flex-start;
  @media (max-width: 768px) {
    display: block;
   };
  color: #01020A;
`


export default Layout
