import React, { Component } from 'react';
import Map from "../components/Map"
import Navbar from "../components/Navbar"

class Dash extends Component {
  state = { users: [] }

  componentDidMount() {
    fetch('/users')
      .then(res => res.text())
      .then(text => console.log(text))
      .then(users => this.setState({ users }));

    if (navigator.geolocation) {
      /* geolocation is available */
      navigator.geolocation.watchPosition(position => {
        console.log(position);
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        }
        this.setState({ pos, isMarkerShown: true })
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
      <div className="Dash">
        <Map
          pos={this.state.pos}
          isMarkerShown={this.state.isMarkerShown}
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyApIn7dZQPu26fDdHQtu1UMfTOWB7P06B0"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />

        <h1>Users</h1>
        {/* {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )} */}
      </div>
    );
  }
}

export default Dash;
