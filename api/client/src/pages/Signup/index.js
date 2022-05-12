/* eslint-disable no-undef */
import React, { useState, useCallback  }from 'react'
import { Register } from '../../components';
import { Login } from '../../components/UseLogin'



export const Signup = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  // we pass this function to the register folder in components
  const submitForm = useCallback(() => {

   setFormSubmitted(true)
  },[setFormSubmitted])

  return (
    <>
    {/* < Register /> */}

    {/* if the register form is submitted, render success page else render Register form */}
    {!formSubmitted ? < Register submitForm={submitForm} /> : <Login />}
    </>

  )
}
