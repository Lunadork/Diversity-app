import React from 'react'
import {Button} from '../Button/index'
import logo from '../../logo1.png'
import './style.css'

 export const GetStarted = () => {
  return (
    <>
     <section id="banner" >
       <img src={logo} alt="" className="logo" />

        <div className="banner-text ">

            <h1>Mental health solutions</h1>
            <p>Diversity is an online mental health app designed to aid those who suffer from mental conditions such as depression, loneliness or anxiety. We have an area for general advice, organising local meetups and even our very own chatbot known as "HAZI"!
            </p>

      </div>
            <div className="banner-btn">
              <Button path="/general-advice" value= "Get started" className="btnSignup"/>
              <Button path="/login" value= "Login" className="btnLogin"/>
            </div>
    </section>


   </>
  )
}
