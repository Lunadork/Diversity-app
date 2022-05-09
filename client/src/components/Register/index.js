import React from 'react'
import  { UseRegister } from '../UseRegister'
import ValidateRegister from '../ValidateRegisterForm'
import './style.css'

 export const Register= () => {


  const {handleChange, values, handleSubmit, errors} = UseRegister(ValidateRegister)
  return (
    <div className="form-content">
      <form  className="form" onSubmit={handleSubmit}>
        <h1>Register with mental health solutions</h1>
        <div className="form-inputs">
          <label htmlFor="username" className="form-label">User name</label>
          <input id="username" type="text" name="username" className="form-input" placeholder="enter username" value={values.username} onChange={handleChange}/>
          {errors.username && <p>{errors.username}</p>}
         </div>

         <div className="form-inputs">
          <label htmlFor="email" className="form-label">email</label>
          <input id="email" type="email" name="email" className="form-input" placeholder="enter email"  value={values.email} onChange={handleChange}/>
         </div>

        <div className="form-inputs">
          <label htmlFor="password" className="form-label">Password</label>
          <input id="password" type="password" name="password" className="form-input" placeholder="enter password"  value={values.password} onChange={handleChange}/>
        </div>

        <div className="form-inputs">
          <label htmlFor="password2" className="form-label">Confirm password</label>
          <input id="password2" type="password" name="password2" className="form-input" placeholder="confirm password"  value={values.password2} onChange={handleChange}/>
        </div>

        <button className="form-input-bnt" type='submit'>Register</button>
        <span className="form-input-login">already have an account? Login <a href="#">here</a></span>
      </form>


    </div>
  )
}
