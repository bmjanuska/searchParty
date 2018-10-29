import React from "react";
import "./Map.css";
import { withScriptjs, withGoogleMap, GoogleMap, Marker, Circle } from "react-google-maps"



const Map = withScriptjs(withGoogleMap((props) =>

  <GoogleMap
    defaultZoom={10}
    defaultCenter={{ lat: 28.589, lng: -81.199 }}
    disableDefaultUI true
  >
    {props.isMarkerShown && <Marker position={props.pos} />}
    {/* <p>Lat: {props.pos.lat}  Lng: {props.pos.lng}</p> */}

    {/* Hardcoded Leu Garden */}
    <Circle
      center={{ lat: 28.567586, lng: -81.3553641 }}
      radius={400}
    />


    {/* Hardcoded Lake Eola */}
    <Circle
      center={{ lat: 28.5438382, lng: -81.37525699999999 }}
      radius={400}
    />

    {/* Hardcoded Bootcamp */}
    <Circle
      center={{ lat: 28.589, lng: -81.199 }}
      radius={400}
    />


  </GoogleMap>


))

export default Map;


// Make a ref to google maps and then panTo() it 
// react refs us the ref to fire to panTo() and you will provide the cordinates 
// list scripts with google maps around props. challenge mode! 

// THE GRAVE YARD ATTEMPTS TO CENTER THE MAP
// { lat: parseFloat(props.pos.lat), lng: parseFloat(props.pos.lng) }
// { lat: parseFloat(28.5899), lng: parseFloat(-81.1998) }
// {{props.pos.lat},{props.pos.lng}

