import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';

const containerStyle = {
  width: '600px',
  height: '400px'
};

const defaultcenter = {
  lat: 51.5072,
  lng: 0.1276
};



let testmarkers = [{ "id" : 1, "position" : { lat: 51.4, lng: 0.13}, "name":"marker1" },
                   { "id" : 2, "position" : { lat: 51.5072, lng: 0.1276}, "name":"marker2"},
                   { "id" : 3, "position" : { lat: 51.51, lng: 0.128}, "name":"marker3"}]



export const GoogMap = () => {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: ""
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(defaultcenter);
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

    let markerName = e

    console.log(markerName)
    
  }


  return isLoaded ? (
      <GoogleMap mapContainerStyle={containerStyle} center={defaultcenter} zoom={10} onLoad={onLoad} onUnmount={onUnmount}>
        
        {testmarkers.map((marker) => (<Marker key = {marker.id} position = {marker.position} onClick = {markerClick} name={marker.name} /> ) )}

      </GoogleMap>




  ) : <></>
}
