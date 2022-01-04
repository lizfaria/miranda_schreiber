import React from "react"
import styled from "styled-components"

const Button = ({onClick, ...props}) => 
  <StyledButton onClick={onClick} props={props}>{props.children}</StyledButton>


const StyledButton = styled.button`
    padding: 1.25rem;
    border: 1px solid #000;
    background-color: #fff;
    cursor: pointer;
    margin-top: 1.25rem;
    transition: all .2s ease-in-out;
    border: 2px solid #000;
    border-radius: 300px;
    border-bottom-left-radius: 300px;
    border-bottom-right-radius: 300px;
    display: inline-block;
    font-family: Fira Sans Extra Condensed, 'sans-serif';
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    min-height: 46px;
    letter-spacing: 1.42px;
    line-height: 14px;
    margin: 0;
    padding: 14px 35px;
    vertical-align: baseline;
    outline: none;
    text-align: center; 
    text-transform: uppercase;
    margin-top: 40px; 

    &:hover {
      background-color: rgb(5, 5, 5);
      color: white;
    }
`

export default Button
