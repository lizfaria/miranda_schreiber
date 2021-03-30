import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const Nav = () => {
  const Nav = styled.nav`
    position: fixed;
    top: 3rem;
    left: 3rem;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: flex-start;
    padding-bottom: 2rem;
    width: 260px;
    & > a {
      line-height: 2em;
      text-decoration: none;
      box-shadow: none;
      color: #1f1f1f;
      &:hover {
        color: #adadad;
      }
    }
  `
  const Title = styled.div`
   font-size: 2rem;
   padding-bottom: 1rem;
  `
  return (
    <Nav
    >
      <Link to={`/`}><Title>Miranda Schreiber</Title></Link>
      <Link to={`/press`}>Selected Press</Link>
      <Link to={`/listen`}>Listen</Link>
      <Link to={`/publications`}>Selected Publications</Link>
      <Link to={`/contact`}>Contact</Link>
    </Nav>
  )
}

export default Nav
