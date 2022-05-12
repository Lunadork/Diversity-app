import React from 'react'
import { Button } from '../../components'
import "./style.css"


export const Helped = () => {
  return (
    <>
    <div id="helped">Glad to here the article help
    <p>Click the button below to go to dash board</p>
    </div>
    <Button path="/dashboard" value= "Dashboard" className="btnLogin"/>
    </>

  )
}
