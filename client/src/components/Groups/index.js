import React from 'react'
import { Group }  from '../../components'

export const Groups = (data) => {


    

    return (
    <section id ="groups-section">
    
        {data.data.map((group) => (<Group key = {group.id} name = {group.name} description = {group.description} address = {group.address} position = {group.position} /> ) )}
    
    </section>
    )
}
