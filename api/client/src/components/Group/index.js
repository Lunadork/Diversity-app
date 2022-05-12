import { React, useState } from 'react'
import { GoogMap } from '../../components'
import './style.css'

export const Group = (data) =>
{
    const [mapVisible, setMapVisible] = useState(false)

    return (
      <div className='groupSectionContainer'>
        <section className='groupsection'>
          <div className='groupTexts'>
            <h4 className='grouptitle'>{data.name}</h4>
            <p className='groupdescription'>{data.description}</p>
            <p className='groupaddress'>{data.address}</p>
            <p className='grouplocation'>{data.location}</p>
          </div>

          <div className='mapToggle'>
            <h4 className='toggleMap' onClick = { () => setMapVisible(!mapVisible) }>click to view map</h4>
           { mapVisible && <GoogMap data = {data}/> }
          </div>



        </section>
      </div>
    )
}
