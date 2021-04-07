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
  padding: 0 40px;
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
    color: #215a49;
    border-bottom: 1px solid #215a49;
    text-decoration: none;
    box-shadow: none;
    transition: all 0.3s ease-out;
    &:hover {
      color: #275475;
      border-bottom: 1px dotted #275475;
    }
  };

  h2, h3 {
    // text-transform: uppercase;
  }
  h2 {
    font-size: 1.2rem;
    margin-bottom: 4rem;
    font-family: Montserrat,sans-serif;
    text-transform: uppercase
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
    color: #4F4C72;
  }
  h1, h2, h3 {
    margin-top: 0,
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
  max-width: 1200px;
  padding: 40px;
  display: flex;
  justifyContent: flex-start;
  alignItems: flex-start;
  @media (max-width: 768px) {
    display: block;
   };
`


export default Layout
