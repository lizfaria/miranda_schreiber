import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = () => {
  const Nav = styled.nav`
    position: fixed;
    top: 2rem;
    left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 2rem;
    width: 260px;
    a {
      text-decoration: none;
      padding-bottom: .5rem;
      box-shadow: none;
      color: #1f1f1f;
      &:hover {
        color: #adadad;
      }
    }
  `
  const Title = styled.h1`
   font-size: 2rem;
   a {
    line-height: 2rem;
   }
  `
  return (
    <Nav
    >
      <Title><Link to={`/`}>Miranda Schreiber</Link></Title>
      <Link to={`/press`}>Selected Press</Link>
      <Link to={`/listen`}>Listen</Link>
      <Link to={`/publications`}>Selected Publications</Link>
      <Link to={`/contact`}>Contact</Link>
    </Nav>
  )
}

export default Nav
