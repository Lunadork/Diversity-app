import { React, useState } from 'react'
import axios from 'axios'

export const AddGroupForm = ( {onAdd} ) =>
{

    const [name,setName] = useState('')
    const [description,setDescription] = useState('')
    const [streetAddress,setStreetAddress] = useState('')
    const [postcode,setPostcode] = useState('')
    const [when,setWhen] = useState('')


    const submitForm = async (e) => {
        e.preventDefault();

        //if any fields empty, abort
        if(!name || !description || !streetAddress || !postcode || !when)
        {
            alert("Please make sure all fields are filled")
            return
        }

        //Validate postcode
        if (!validate_postcode(postcode))
        {
            alert("Invalid postcode submitted.")
            return
        }

        //Try convert postcode to lat/long using postcodes.io
        try
        {
            const resp = await getPosition(postcode)

            console.log(resp)

            const lati = resp.result.latitude
            const lngi = resp.result.longitude

            console.log(parseFloat(lati))
            console.log(parseFloat(lngi))

            const position = {lat: lati, lng: lngi}

            
            const address = streetAddress+" - "+postcode.toUpperCase()
        
            onAdd(name,description,address,position,when)
            
        }
        catch(err)
        {
            alert("Failed to translate postcode to lat/long: " +err)
            console.warn("Failed to get lat/long from response " +err)
        }

        
    }

        //regex postcode checking
        function validate_postcode(postcode) 
        {
            postcode = postcode.replace(/\s/g, "");
            const regex = /^[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}$/i;
            return regex.test(postcode);
        }

        //postcodeio postcode conversion
        async function getPosition(postcode)
        {
            //Send our postcode to postcodes.io, return the data we get back to the submitForm function
            try
            {
                const url = `https://api.postcodes.io/postcodes/${postcode}`
                const resp = await axios.get(url)
                return(resp.data)
            }
            catch(err)
            {
                alert("Internal server error: " +err)
                console.warn(`Failed to make get to postcodes.io.  Postcode was ${postcode}.  Error: ${err}`)
            }
        }

    return (

        <form onSubmit={submitForm}>

            <input className='groupNameInput' type = 'text' placeholder='Group/Meetup name' onChange={(e) => setName(e.target.value)}/>
            <input className='groupDescriptionInput' type = 'text' placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
            <input className='groupStreetAddressInput' type = 'text' placeholder='Street Address' onChange={(e) => setStreetAddress(e.target.value)}/>
            <input className='postcodeInput' type = 'text' placeholder='Postcode' onChange={(e) => setPostcode(e.target.value)}/>
            <input className='whenInput' type = 'text' placeholder='When is your event?' onChange={(e) => setWhen(e.target.value)}/>
            <input className='groupSubmitbtn' type='submit' value='Add your group' />
        </form>

    )

} 