import React from 'react'
import { HaziMessage } from '../HaziMessage'

export const HaziChat = (data) => {



  const sortedData = data.data.sort((a,b) => parseInt(b.id) - parseInt(a.id));



  return (
    
    <section>

      <section id="messagesSection" className='messagesSection'>

      {sortedData.map((message) => (<HaziMessage key = {message.id} message = {message} /> ) )}

      </section>

      



    </section>

    
  )
}
