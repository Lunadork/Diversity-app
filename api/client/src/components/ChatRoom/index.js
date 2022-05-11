import React from 'react'
import './style.css'
import {Button} from '../Button'
export const ChatRoom= () => {
    return (
      <>
        <div className='container-chat'>
          <h1>Select a room to join</h1>
          <div>
          <ul className='chat-display'>
            <div className='btn-join'>
                <li>General Chat: number users in chat</li>
                <button className='join'>Join</button>
            </div>
            <div className='btn-join'>
                <li>Anxiety Chat: number users in chat</li>
                <button className='join'>Join</button>
            </div>
            <div className='btn-join'>
                <li>Depression Chat: number users in chat</li>
                <button className='join'>Join</button>
            </div>
            <div className='btn-join'>
                <li>Social Isolation Chat: number users in chat</li>
                <button className='join'>Join</button>
            </div>
            
              {/* <li className='chat-name'>General Chat: </li><button path=''  className="category-btn"/>Join<button/>
              <li className='chat-name'>Anxiety Chat: </li><button path='' value = 'Join' className="category-btn"/>Join<button/>
              <li className='chat-name'>Depression Chat:</li><button path='' value = 'Join' className="category-btn"/>Join<button/>
              <li className='chat-name'>Social Isolation Chat:</li><button  value = 'Join' className="category-btn"/>Join<button/> */}
          </ul>
        </div>
          <Button path = '/dashboard'  className="category-btn" value = 'Back to home'/>
          
      </div>
      
      
      
      
      </>
    )
  }
  