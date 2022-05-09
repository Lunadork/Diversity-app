import {useState, useEffect} from 'react'

//we import validatingErrors from Register and pass it as a parameter to UseRegister

 export  const UseRegister = (callback, validatingErrors)  => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const [errors, setErrors] = useState({})
  const [formSubmitting, setFormSubmitting] = useState (false)

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validatingErrors(values))
    setFormSubmitting(true);

  }

//  allows us to submit Register form if there are no errors 
useEffect(() => {
  if(Object.keys(errors).length === 0 && formSubmitting ){
    callback()
  }
}, [errors])


  const handleChange = e => {
    setValues({
      ...values,
      //targeting all name in the form in Register
      [e.target.name]: e.target.value
    })

  }
  return {handleChange, values, handleSubmit, errors}

}
