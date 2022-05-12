import React from 'react'
import './style.css'
import { Button } from '../Button/index'

export const DashboardComponent = () => {
  return (
    // <>
      <div className="background">
        <div className='container-dashboard'>
            <h1>Dashboard</h1>
            <div className='category-section'>
                <Button path = '/general-advice' className="category-btn"  value = 'General Advice'/> 
                <Button path = '/chatroom-board' className="category-btn" value = 'Live Support'/> 
                <Button path = '/hazi' className="category-btn" value = 'Chat with Dr.Chatbot'/> 
                <Button path = '/groups' className="category-btn" value = 'Local Meetups'/> 
            </div>
            <Button path = '/'  className="category-btn" value = 'Sign Out'/>
        </div>
      </div>
    // </>
  )
}
