import React from 'react'
import {Button} from '../../components'
import logo from '../../logo1.png'
import './style.css'

 export const GetStarted = () => {
  return (
    <>
     <section id="banner" >
       <img src={logo} alt="" class="logo" />

        <div class="banner-text ">

            <h1>Mental health solutions</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            </p>

      </div>
            <div class="banner-btn">
              <Button path="/signup" value= "Get started" class="btnSignup"/>
              <Button path="/signup" value= "Login" class="btnSignup"/>
            </div>
    </section>


   </>
  )
}
