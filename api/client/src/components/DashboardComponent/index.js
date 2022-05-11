import React from 'react'
import './style.css'
import { Button } from '../Button/index'

export const DashboardComponent = () => {
  return (
    <>
   
    <div className='container-dashboard'>
        <h1>Dashboard</h1>
        <div className='category-section'>
            <Button path = '/general-advice' className="category-btn"  value = 'General Advice'/> 
            <Button path = '' className="category-btn" value = 'Live Support'/> 
            <Button path = '' className="category-btn" value = 'Chat with Dr.Chatbot'/> 
            <Button path = '' className="category-btn" value = 'Local Meetups'/> 
        </div>
        <Button path = '/'  className="category-btn" value = 'Sign Out'/>
    </div>
    
    
    </>
  )
}
