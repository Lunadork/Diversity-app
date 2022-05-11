import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '200px'
};

export const GoogMap = (data) => {

  data = data.data

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(data.position);
    map.fitBounds(bounds);
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null)
  }, [])


  function markerClick(e)
  {
    //do things when marker clicked
    console.log("Clicked!")
    
  }


  return isLoaded ? (
      <GoogleMap mapContainerStyle={containerStyle} center={data.position} defaultZoom={11} zoom={11} onLoad={onLoad} onUnmount={onUnmount}>
        
        <Marker key = {data.id} position = {data.position} onClick = {markerClick}  /> 

      </GoogleMap>




  ) : <></>
}
