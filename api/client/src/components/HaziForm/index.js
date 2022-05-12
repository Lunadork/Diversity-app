import {React, useState} from 'react'

export const HaziForm = ( {onSend} ) => {

    const [messageContent, setMessageContent] = useState('')


    const submitForm = (e) => 
    {
        e.preventDefault()
        console.log("m s form")

        const inbox = document.getElementById("inputbox")
        inbox.value = "";

        onSend(messageContent)
    }

  return (
   
    <form className='HaziForm' onSubmit={submitForm}>
        <div className='row'>
            <input id="inputbox" className='MessageInput col-10' type = "text" placeholder='Type Message here' onChange={(e) => setMessageContent(e.target.value)} />
            <input className='MessageSubmittbtn col-2' type='submit' value='Send'/>
        </div>
    </form>
    
  )
}
