import React, { Component } from 'react';
import { Container, Row } from "../components/Grid";

class Home extends Component {
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
            <div className="Home">
                <Container>
                    <Row>
                        <h1>Challenges</h1>
                        {/* {this.state.users.map(user =>
                        <div key={user.id}>{user.username}</div>)} */}
                    </Row>
                    {/* Challenges */}
                </Container>

            </div>
        );
    }
}

export default Home;

