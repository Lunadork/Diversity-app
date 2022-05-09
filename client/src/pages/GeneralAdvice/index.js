import React from 'react'
import { Button } from '../../components'
import './style.css'

 export const GeneralAdvice = () => {
  return (
    <>
    <div className="container-general-advice">
      <h1>Suggestions for general advice</h1>
        <div className='category-section'>
          <button className="category-btn " type='submit'>General Advice</button>
          <button className="category-btn " type='submit'>Anxiety</button>
          <button className="category-btn " type='submit'>Depression</button>
          <button className="category-btn " type='submit'>Social Isolation</button>
        </div>
    </div>
    </>
  )
}
