import React, { useState} from 'react'
import { Text, AdviceData } from '../../components'
import { Button  } from "../../components";
import './style.css'

 export const GeneralAdvice = () => {

  const [guide, setGuide] = useState("General Advice")

  return (
    <>

       <div className="container-general-advice">
        <h3>Some Guides and Tips on how to deal with Mental health</h3>
        <br></br>
        <h3>Chose a Category</h3>

          <div className='category-section'>
            <button className="category-btn " type='submit' onClick={()=> setGuide("General Advice")}>General</button>

            <button className="category-btn " type='submit' onClick={()=> setGuide("Anxiety")}>Anxiety</button>

            <button className="category-btn " type='submit' onClick={()=> setGuide("Depression")}>Depression</button>

            <button className="category-btn " type='submit' onClick={()=> setGuide("Social Isolation")}>Social Isolation</button>
          </div>

          <div>
            {guide === "General Advice" && <Text data={AdviceData} AdviceDataIndex= {0} />}

            {guide === "Anxiety" && <Text data={AdviceData} AdviceDataIndex={1}/>}

            {guide === "Depression" && <Text data={AdviceData} AdviceDataIndex={2}/>}

            {guide === "Social Isolation" && <Text data={AdviceData} AdviceDataIndex={3}/>}
          </div>

        <div className='btnHelpSection'>
          
           <Button path="/helped" value= "This helped" className="btnLogin"/>
           <Button path="/dashboard" value= "Didn't help" className="btnLogin"/>
        </div>

      </div>
    </>
  )
}
