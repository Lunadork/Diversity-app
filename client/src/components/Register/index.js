import React from 'react'
import './style.css'

 export const Register= () => {
  return (
    <div className="form-content">
      <form  className="form">
        <h1>Register with mental health solutions</h1>
        <div className="form-inputs">

          <label htmlFor="username" className="form-label">User name</label>
          <input id="username" type="text" name="username" className="form-input" placeholder="enter username"/>

          <label htmlFor="username" className="form-label">email</label>
          <input id="email" type="email" name="email" className="form-input" placeholder="enter email"/>

          <label htmlFor="password" className="form-label">Password</label>
          <input type="password" name="password" className="form-input" placeholder="enter password"/>

          <label htmlFor="password2" className="form-label">Confirm password</label>
          <input type="password2" name="password2" className="form-input" placeholder="confirm password"/>

        </div>

        <button className="form-input-bnt" type='submit'>Register</button>
        <span className="form-input-login">already have an account? Login <a href="#">here</a></span>
      </form>


    </div>
  )
}
