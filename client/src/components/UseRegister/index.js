import {useState, useEffect} from 'react'

//we import validatingErrors from Register and pass it as a parameter to UseRegister 

 export  const UseRegister = validatingErrors  => {
  const [values, setValues] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  })

  const [errors, setErrors] = useState({})

  const handleSubmit = e => {
    e.preventDefault();
    setErrors(validatingErrors(values))
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
