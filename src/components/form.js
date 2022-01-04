import React, { useState } from "react"
import styled from "styled-components"
import axios from "axios"
import { FiX } from "@react-icons/all-files/fi/FiX"
import Button from "./button"


const Form = ({handleCloseForm}) => {


  const [serverState, setServerState] = useState({
    submitting: false,
    status: null
  });

  const handleClick = (e) => {
    return e.target.value.length > 0 ?
    e.target.nextElementSibling.classList.add('filled')
    : e.target.nextElementSibling.classList.remove('filled')
  }

  const handleFocus = (e) => {
    return e.target.nextElementSibling.classList.add('filled')
  }

  const handleBlur = (e) => {
    return e.target.value.length <= 0 ? 
    e.target.nextElementSibling.classList.remove('filled')
    : null
  }

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg }
    });
    if (ok) {
      form.reset();
    }
  };

  const handleOnSubmit = e => {
    e.preventDefault();
    const form = e.target;
    setServerState({ submitting: true });
    axios({
      method: "post",
      url: process.env.GETFORM_URL,
      data: new FormData(form)
    })
      .then(r => {
        handleServerResponse(true, "Thanks!", form);
      })
      .catch(r => {
        handleServerResponse(false, r.response.data.error, form);
      });
  };

  const formSubmitting = serverState.status?.submitting === true

  return (
    <ModalWrapper>
      <Modal>
        <CloseButton 
          onClick={(e) => {
            e.stopPropagation();
            handleCloseForm();
          }}
        >
          <FiX />
        </CloseButton>
        <StyledForm onSubmit={handleOnSubmit}>
          <fieldset>
            <input type="text" name="name" id="name" required onChange={e => handleClick(e)} onFocus={e => handleFocus(e) } onBlur={e => handleBlur(e) }/>
            <label htmlFor="name">Name</label>
          </fieldset>
          <fieldset> 
            <input type="email" name="email" id="email" required onChange={e => handleClick(e)} onFocus={e => handleFocus(e) } onBlur={e => handleBlur(e) }/>
            <label htmlFor="email">Email</label>
          </fieldset>
          <fieldset> 
            <textarea name="message" id="message" rows="5" required onChange={e => handleClick(e)} onFocus={e => handleFocus(e) } onBlur={e => handleBlur(e) }/>
            <label htmlFor="message">Message</label>
          </fieldset>
          <Button disabled={formSubmitting} aria-busy={formSubmitting} type="submit">
            {
              formSubmitting
              ? 'Submitting'
              : serverState.status?.ok
              ? 'Message Sent' 
              : 'Send Message'
            }
          </Button>
      </StyledForm>
      </Modal>
    </ModalWrapper>

  )
}

const CloseButton = styled.button`
  border: 0;
  background: none;
  box-shadow: none;
  position: relative;
  left: calc(100% - 40px);
  top: -10px;
  cursor: pointer;
  svg {
    font-size: 16px;
  };
`

const ModalWrapper = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Modal = styled.div`
  padding: 40px;
  max-width: 600px;
  background: #fff;
  width: 100%;
  text-align: left;
  & > * {
    margin: 0 auto;
  }
`

const StyledForm = styled.form`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  max-width: 400px;
  border-top: 1px solid black;
  fieldset {
    position: relative;
    margin: 0;
    padding: 0;
    border: none;
    &:focus-within {
      border-top: none;
      box-shadow: none;
    }
  };
  label {
    position: absolute;
    left: 1.25rem;
    right: 1.25rem;
    top: 1.55rem;
    bottom: 1.25rem;
    width: 100%;
    transition: all 0.2s ease-in-out; 
  };
  label.filled {
      left: 1.25rem;
      right: 0;
      top: .5rem;
      bottom: 0;
      font-size: 0.75rem;
      color: #3a3a3a; 
  }
  input, textArea {
    z-index: 1;
    padding: 1.5rem 1.25rem;
    width: 100%;
    border-top: 1px solid transparent;
    border-bottom: 1px solid black;
    border-left: 1px solid black;
    border-right: 1px solid black;
    transition: all .3s ease-out;
    &:focus {
      outline: none;
      /* border-top: 1px solid black; */
      box-shadow: none;
      /* border-bottom: 1px solid black;
      border-left: 1px solid black;
      border-right: 1px solid black; */
    }
  };
  /* button {
    padding: 1.25rem;
    border: 1px solid #000;
    background-color: #fff;
    cursor: pointer;
    margin-top: 1.25rem;
    transition: all .2s ease-in-out;
    &:hover {
      background-color: #000;
      color: white;
    }
  } */
`


export default Form
