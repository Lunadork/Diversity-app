import { React, useState } from 'react'
import { Groups, AddGroupForm } from '../../components'



export const Meetups = () => 
{                 

  const [groups,setGroups] = useState([ { "id" : 1, "name" : "Depression support group", "address" : "Dev purposes no address", "position" : {lat: 51.49, lng: 0.125}, "when" : "Thursdays at 7pm", "description" : "A weekly depression support meetup"},
  { "id" : 2, "name": "Anxiety support group", "address" : "Dev purposes no address", "position" : {lat: 51.5072, lng: 0.1276}, "when" : "Every second Tuesday at 8pm", "description" : "Anxiety support group, for those who suffer.  Friends and relatives welcome"},
  { "id" : 3, "name" : "Social anxiety support group", "address" : "Dev purposes only no address", "position" : {lat: 51.51, lng: 0.128}, "when" : "The first Sunday of every month at noon", "description" : "Relaxed, no pressure early afternoon tea.  Autism friendly"},
  { "id" : 4, "name" : "Lunch time social", "address" : "Dev purposes - no address", "position" : {lat: 51.495, lng: 0.1249}, "when" : "Saturdays at 1pm", "description" : "Support group for the elderly and isolated."}
  ])


  const addGroup = (name,description,address,position,when) => 
  {
 
    // console.log(latitude + " " + longitude)

    const newid = groups.length +1
    const newgroup = { "id" : newid, "name": name, "description" : description, "address" : address, "position" : position, "when" : when }

    console.log(newgroup)

    let newarr=[]

    groups.forEach( group =>
    {
      newarr.push(group)
    })

    newarr.push(newgroup)


    setGroups(newarr)
  
  }
 

  return (
    <div>Groups

    <AddGroupForm onAdd = {addGroup} />
    
    {groups.length > 0 ? (<Groups data = {groups} />) : 'No groups found' }     

    </div>
  )
}

