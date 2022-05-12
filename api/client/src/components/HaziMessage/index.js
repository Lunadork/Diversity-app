import React from 'react'

export const HaziMessage = (message) => {

  //This is really bad but in a hurry, if have time sort later
  const mess = message.message.message

  return (
    <p className='HaziMessage'>{mess}</p>
  )
}
