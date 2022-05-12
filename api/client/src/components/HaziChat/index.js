import React from 'react'
import { HaziMessage } from '../HaziMessage'

export const HaziChat = (data) => {



  const sortedData = data.data.sort((a,b) => parseInt(a.id) - parseInt(b.id));



  return (
    
    <section>

      <section className='messagesSection'>

      {sortedData.map((message) => (<HaziMessage key = {message.id} message = {message} /> ) )}

      </section>

      



    </section>

    
  )
}
