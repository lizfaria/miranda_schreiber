import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import { rhythm } from "../utils/typography"
import Nav from "./nav"

const Layout = ({ children }) => {
  return (
    <Wrapper>
      <div
        style={{
          maxWidth: rhythm(24),
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
`

const Wrapper = styled.div`
  min-height: 100vh;
`

const Footer = styled.footer`
  text-align: center;
  margin: 24px;
`

export default Layout
