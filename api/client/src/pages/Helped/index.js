import React from 'react'
import { Button } from '../../components'


export const Helped = () => {
  return (
    <>
    <div>Glad to here the article help</div>
    <p>Click the button below to go to dash board</p>
   
    <Button path="/dashboard" value= "Dashboard" className="btnLogin"/>
    </>

  )
}
