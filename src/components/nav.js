import React, {useState} from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { FiMenu } from "@react-icons/all-files/fi/FiMenu"
import { FiX } from "@react-icons/all-files/fi/FiX"

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const handleOpenMobileMenu = () => {
   setMobileNavOpen(true)
  }
  const handleCloseMobileMenu = () => {
    setMobileNavOpen(false)
  }
  console.log(mobileNavOpen)
  return (
    <>
    <MobileNav >
     
     <Title><Link to={`/`}>Miranda Schreiber</Link></Title>
     <Button onClick={handleOpenMobileMenu}><FiMenu /></Button>
    </MobileNav>
    <NavWrapper className={mobileNavOpen ? 'open' : ''}
    >
      {mobileNavOpen && <Button onClick={handleCloseMobileMenu}><FiX /></Button>}
      <Title><Link to={`/`}>Miranda Schreiber</Link></Title>
      <Link to={`/press`}>Selected Press</Link>
      <Link to={`/listen`}>Listen</Link>
      <Link to={`/publications`}>Selected Publications</Link>
      <Link to={`/contact`}>Contact</Link>
    </NavWrapper>
    </>
  )
}

export default Nav

const Button = styled.button`
border: 0;
background: none;
box-shadow: none;
cursor: pointer;
svg {
  font-size: 40px;
};
`

const MobileNav = styled.nav`
display: none;
margin-bottom: 2rem;
h1 {
  padding: 0;
  margin: 0;
}

@media (max-width: 768px) {
 display: flex;
 justify-content: space-between;
 align-items:flex-start;
};
`

const NavWrapper = styled.nav`
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
      margin-bottom: .5rem;
      box-shadow: none;
      color: #1f1f1f;
      transition: all .2s ease-out;
      border-bottom: 1px dotted transparent;
      &:hover {
        // color: #adadad;
        color: #215a49;
        border-bottom: 1px dotted #215a49;
      }
    }
  
    @media (max-width: 768px) {
      background-color: white;
      top: 0;
      right: 0;
      left: 100vw;
      bottom: 0;
      width: 100vw;
      height: 100vh;
      align-items: flex-start;
      justify-content: flex-start;
      transition: all .2s ease-in-out;
      z-index: 1;

      a {
        padding: 20px;
      };
    };

    &.open {
      @media (max-width: 768px) {
        left: 0;
        opacity: 1;
      };
    };
  `
  const Title = styled.h1`
   font-size: 2rem;

   a {
    line-height: 2rem;
    text-decoration: none;
    box-shadow: none;
    color: #1f1f1f;
    &:hover {
    border-bottom: none;
    }
   }
  `