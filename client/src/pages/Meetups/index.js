import React from 'react'
import { Groups } from '../../components'



export const Meetups = () => 
{                 
  //     group.id - INT PK /  group.name - VARCHAR (50) / group.description - VARCHAR (300) / group.address - VARCHAR (300) / group.location - { lat: NUMERIC, lng: NUMERIC} / group.when - VARCHAR (300)

  let groups =     [ { "id" : 1, "name" : "Depression support group", "address" : "Dev purposes no address", "position" : {lat: 51.49, lng: 0.125}, "when" : "Thursdays at 7pm", "description" : "A weekly depression support meetup"},
                     { "id" : 2, "name": "Anxiety support group", "address" : "Dev purposes no address", "position" : {lat: 51.5072, lng: 0.1276}, "when" : "Every second Tuesday at 8pm", "description" : "Anxiety support group, for those who suffer.  Friends and relatives welcome"},
                     { "id" : 3, "name" : "Social anxiety support group", "address" : "Dev purposes only no address", "position" : {lat: 51.51, lng: 0.128}, "when" : "The first Sunday of every month at noon", "description" : "Relaxed, no pressure early afternoon tea.  Autism friendly"},
                     { "id" : 4, "name" : "Lunch time social", "address" : "Dev purposes - no address", "position" : {lat: 51.495, lng: 0.1249}, "when" : "Saturdays at 1pm", "description" : "Support group for the elderly and isolated."}
                   ] 


  return (
    <div>Groups
    
    {groups.length > 0 ? (<Groups data = {groups} />) : 'No groups found' }     

    </div>
  )
}

