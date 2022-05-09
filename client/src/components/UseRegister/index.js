import {useState, useEffect} from 'react'


 export  const UseRegister = ValidateRegister => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const [errors, setErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(ValidateRegister(values))
  }


  const handleChange = e => {
    setValues({
      ...values,
      //targeting all name in the form in Register
      [e.target.name]: e.target.value
    })

  }
  return {handleChange, values, handleSubmit, errors}

}
