import { React, useState } from 'react'
import { GoogMap } from '../../components'

export const Group = (data) => 
{
    const [mapVisible, setMapVisible] = useState(false)

    return ( 
    <section className='groupsection'>

        <h4 className='grouptitle'>{data.name}</h4>
        <p className='groupdescription'>{data.description}</p>
        <p className='groupaddress'>{data.address}</p>
        <p className='grouplocation'>{data.location}</p>

        

        <p className='toggleMap' onClick = { () => setMapVisible(!mapVisible) }>click to toggle map</p>

        
        { mapVisible && <GoogMap data = {data}/> }

    </section>
    )
}
