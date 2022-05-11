import React from 'react'
import './style.css'

//data is from general advice page
export const Text = ({ data, AdviceDataIndex}) => {
  return (
      <div>
        {data[AdviceDataIndex].map(item => (
          <div className='textAdvice'>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </div>
        ))}


      </div>
  )
}
