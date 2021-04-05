import React from "react"
import styled from "styled-components"

// import "typeface-montserrat"
// import "typeface-merriweather"
// import "typeface-martel-sans"

import { rhythm } from "../utils/typography"
import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <div
        style={{
          maxWidth: 1200,
          padding: 40,
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
        }}
      >
        <Nav />
        <Main>{children}</Main>
      </div>
    </Wrapper>
  )
}

const Main = styled.main`
  width: calc(100%);
  padding: 0 40px;
  margin-left: 260px;
  a {
    color: #215a49;
    &:hover {
      color: #355F56;
    }
  };
  h2, h3 {
    text-transform: uppercase;
  }
  h2 {
    font-size: 1.5rem;
    margin-bottom: 4rem;
  }
  h3 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }
  h1, h2, h3 {
    margin-top: 0,
  }
`

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
