import React, { useState }from 'react'
import { Register } from '../../components';
import { RegisterSuccess } from '../../components';
import { Login } from '../../components/UseLogin'



export const Signup = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  //we pass this function to the register folder in components
  function submitForm() {
    setFormSubmitted(true)
  }

  return (
    <>
    {/* if the register form is submitted, render success page else render Register form */}
    {!formSubmitted ? < Register submitForm={submitForm} /> : <Login />}
    </>

  )
}
