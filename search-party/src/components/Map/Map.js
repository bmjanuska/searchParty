import React from "react";
import "./Map.css";
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const Map = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: -34.397, lng: 150.644 }}
    
  >
    {props.isMarkerShown && <Marker position={props.pos} />}
  </GoogleMap>
))


export default Map; 


// Make a ref to google maps and then panTo() it 
// react refs us the ref to fire to panTo() and you will provide the cordinates 
// list scripts with google maps around props. challenge mode! 