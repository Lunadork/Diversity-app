import React, { useState }from 'react'
import { Register } from '../../components';



export const Signup = () => {
  const [formSubmitted, setFormSubmitted] = useState(false)

  //we pass this function to the register folder in components
  function submitForm() {
    setFormSubmitted(true)
  }

  return (
    <>
    <Register />

    {!formSubmitted ? < Register submitForm={submitForm} /> : <RegisterSuccess />}
    </>

  )
}
