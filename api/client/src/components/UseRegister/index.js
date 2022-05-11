import {useState, useEffect} from 'react'
import axios from 'axios';

const baseUrl="https://fpmhapp.herokuapp.com/users/"

//we import validatingErrors from Register and pass it as a parameter to UseRegister

 export const UseRegister = (callback, validatingErrors)  => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const [errors, setErrors] = useState({})
  const [formSubmitting, setFormSubmitting] = useState (false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validatingErrors(userInfo))
    setFormSubmitting(true);
  }

//  allows us to submit Register form if there are no errors
useEffect(() => {
  if(Object.keys(errors).length === 0 && formSubmitting ){
     callback()
  }
}, [errors, formSubmitting, callback ])


  const handleChange = e => {
    setUserInfo({
      ...userInfo,
      //targeting all name in the form in Register
      [e.target.name]: e.target.value
    })
    console.log(userInfo)
  }



  // we pass this function to the register folder in components




  return {handleChange, userInfo, handleSubmit, errors}

}
