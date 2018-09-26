import React, { Component } from 'react';
import Map from "../components/Map"
import ChallengeList from "../components/ChallengeList"
import ModalSuccess from "../components/ModalSuccess"
import ModalDenied from "../components/ModalDenied"
import axios from "axios";
import { Container, Row } from "../components/Grid";

class Challenge extends Component {
    state = { 
        users: [], 
        successOpen: false, 
        denileOpen: false
    }

    componentDidMount() {
        axios.get('/users')
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

    checkin = () => {
        console.log("I be checkin in~")
        this.setState({successOpen: true})
        //if user checkin in successfully 
            // Recieve a congrats you found the spot msg
        // else 
            // Keep lookin! 
    }


    handleSuccessClose = () => {
        this.setState({successOpen: false})
    }

    handleDeniedClose = () => {
        this.setState({denileOpen: false})
    }

    render() {
        return (
            <div className="Challenge">
                {this.state.successOpen && <ModalSuccess handleClose={this.handleSuccessClose}/>}
                {this.state.denileOpen && <ModalDenied handleClose={this.handleDeniedClose}/>}

                <Map
                    pos={this.state.pos}
                    isMarkerShown={this.state.isMarkerShown}
                    googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyApIn7dZQPu26fDdHQtu1UMfTOWB7P06B0"
                    loadingElement={<div style={{ height: `100%` }} />}
                    containerElement={<div style={{ height: `400px` }} />}
                    mapElement={<div style={{ height: `100%` }} />}
                />
                <Container>
                    <Row>
                        <h1>Checkpoints</h1>

                        {/* THIS IS NOT SHOWING UP */}
                        <hr style={{borderWidth: 2}}></hr>
                        
                        {/* {this.state.users.map(user =>
                        <div key={user.id}>{user.username}</div>)} */}
                    </Row>
                    <ChallengeList
                        handleCheckin={this.checkin}
                    />
                    {/* Challenges */}
                </Container>

            </div>
        );
    }
}

export default Challenge;

