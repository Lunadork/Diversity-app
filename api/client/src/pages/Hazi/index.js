import {React, useState} from 'react'
import { HaziChat, HaziForm } from '../../components'
import axios from 'axios'
import './style.css'

const conStr = "http://localhost:5000/bot"

export const Hazi = () => {

    const [messages,setMessages] = useState([{ "id" : 1, "message" : "Say hi to begin!"}])
    const [context,setContext] = useState(["Start"])



    const sendMessage = async (newMessage,username = 'anon',) =>
    {    

        let response = await axios.post(conStr, 
                                    {
                                        "username" : username,
                                        "message" : newMessage.toLowerCase(),
                                        "context" : context
                                    })
                                    
        const data = response.data

        const userMessage = { "id" : messages.length+1, "message" : username + ": " +newMessage }

        const haziMessage = { "id" : messages.length+2, "message" : "Hazi: " + data.message}

        let newarr = []

        messages.forEach ( message =>
            {
                newarr.push(message)
            })
        
        newarr.push(userMessage)
        newarr.push(haziMessage)

        setMessages(newarr)

        setContext(data.context)

        const chatBox = document.getElementById("messagesSection")
        chatBox.scrollTop = chatBox.scrollHeight;

    }




  return (
    <>
    <p className = "disclaimer">"Hazibot is not an alternative for professional medical advice and is in early development.  If you are in immediate danger please call Samaritans on 116 123.</p>
    
    {messages.length > 0 ? (<HaziChat data = {messages} />) : "No messages found"}
    <HaziForm onSend={sendMessage} />
    </>

  )
}
