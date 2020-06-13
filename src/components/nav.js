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
      <Link to={`/`}>home</Link>
      <Link to={`/bio`}>bio</Link>
      <Link to={`/press`}>press</Link>
      <Link to={`/writing`}>writing</Link>
      <Link to={`/contact`}>contact</Link>
    </nav>
  )
}

export default Nav
