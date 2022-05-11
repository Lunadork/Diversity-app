import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

export const Button = ({path,value}) => {
  const navigateTo = useNavigate();

  return <button className='globalBtn' id='globalButton' onClick={() => navigateTo(path)} style={{cursor: 'pointer'}}>{value}</button>
}


