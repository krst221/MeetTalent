import React from 'react'
import "./Maps.scss"
import {useJsApiLoader, GoogleMap, Marker} from "@react-google-maps/api"


const center = {lat: 40.425601, lng: -3.691813 }

const Maps = () => {

    const {isLoaded} = useJsApiLoader({
        googleMapsApiKey : "AIzaSyCfLvvBJv_dE1-uIL6-FxNEEpAVorwfdTs"
    })

    if(!isLoaded) {
        return 
    }

  return (    
    <div className='b-googlemaps-container'>
    <GoogleMap center={center} zoom={15} mapContainerStyle={{width:"100vw", height:"100vh"}}>
        <div className='b-halo-position'>
            <Marker position={center}></Marker>
        </div>
    </GoogleMap>
    </div>
  )
}

export default Maps