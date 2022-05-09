import React from 'react'
import  { UseRegister } from '../UseRegister'
import validatingErrors from '../ValidateRegisterForm'
import './style.css'



// all error messages for validations are triggered from ValidateRegisterForm
//UseRegister coming from use UseRegister component
// submitForm is coming from sigup folder in pages folder

 export const Register= ({submitForm}) => {

  const {handleChange, values, handleSubmit, errors} = UseRegister(submitForm, validatingErrors )

  return (
  <div class="bg-img">

    <div className="form-container">
      <div className="form-content ">
        <form  className="form" onSubmit={handleSubmit}>
          <h1>Register with mental health solutions</h1>
          <div className="form-inputs">
            <label htmlFor="username" className="form-label">User name</label>
            <input id="username" type="text" name="username" className="form-input" placeholder="enter username" value={values.username} onChange={handleChange}/>
            {errors.username && <p>{errors.username}</p>}
            {/* <p>{errors.username}</p> if it's true returns whatever we passed in ValidateRegisterForm   */}
          </div>

          <div className="form-inputs">
            <label htmlFor="email" className="form-label">email</label>
            <input id="email" type="email" name="email" className="form-input" placeholder="enter email"  value={values.email} onChange={handleChange}/>
            {errors.email && <p>{errors.email}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password" className="form-label">Password</label>
            <input id="password" type="password" name="password" className="form-input" placeholder="enter password"  value={values.password} onChange={handleChange}/>
            {errors.password && <p>{errors.password}</p>}
          </div>

          <div className="form-inputs">
            <label htmlFor="password2" className="form-label">Confirm password</label>
            <input id="password2" type="password" name="password2" className="form-input" placeholder="confirm password"  value={values.password2} onChange={handleChange}/>
            {errors.password2&& <p>{errors.password2}</p>}
          </div>

          <button className="form-input-btn " type='submit'>Register</button>
          <span className="form-input-login">Already have an account? Login <a href="/">here</a></span>
        </form>
      </div>
    </div>
  </div>
  )
}
