import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = () => {
  return (
    <nav
      style={{
        display: `flex`,
        justifyContent: `space-around`,
        alignItems: `center`,
        paddingBottom: `2rem`,
      }}
    >
      <Link to={`/`}>Miranda Schreiber</Link>
      <Link to={`/press`}>Selected Press</Link>
      <Link to={`/listen`}>Listen</Link>
      <Link to={`/publications`}>Selected Publications</Link>
      <Link to={`/contact`}>Contact</Link>
    </nav>
  )
}

export default Nav
