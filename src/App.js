import React, { Component } from 'react';
import './App.css';
import Map from "./components/Map";


class App extends Component {
  state = { 
    pos:{},
    isMarkerShown: false
  }
  componentDidMount() {
    if (navigator.geolocation) {
        /* geolocation is available */
        navigator.geolocation.watchPosition (position => {
          console.log(position);
          var pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          }
          this.setState({pos, isMarkerShown:true})
          // panTo(pos); 
          // Map.setPosition(pos)
          // Map.setContent('Location Here. ')
          // Map.setCenter(pos)
        })
    } else {
      /* geolocation IS NOT available */
    }
  }



  render() {
    return (
      <div className="App">
        <Map 
          pos={this.state.pos}
          isMarkerShown={this.state.isMarkerShown}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyApIn7dZQPu26fDdHQtu1UMfTOWB7P06B0"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default App;


