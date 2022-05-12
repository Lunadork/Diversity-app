import {React, useState} from 'react'

export const HaziForm = ( {onSend} ) => {

    const [messageContent, setMessageContent] = useState('')


    const submitForm = (e) => 
    {
        e.preventDefault()
        console.log("m s form")
        onSend(messageContent)
    }

  return (
   
    <form className='HaziForm' onSubmit={submitForm}>
        <input className='MessageInput' type = "text" placeholder='Type Message here' onChange={(e) => setMessageContent(e.target.value)} />
        <input className='MessageSubmittbtn' type='submit' value='Send'/>
    </form>
    
  )
}
