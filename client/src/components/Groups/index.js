import React from 'react'
import { Group }  from '../../components'

export const Groups = (data) => {


    const sortedData = data.data.sort((a,b) => parseInt(b.id) - parseInt(a.id));

    return (
    <section id ="groups-section">
    
        {sortedData.map((group) => (<Group key = {group.id} name = {group.name} description = {group.description} address = {group.address} position = {group.position} /> ) )}
    
    </section>
    )
}
