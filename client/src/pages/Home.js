import React, { Component } from 'react';
import { Container, Row } from "../components/Grid";

class Home extends Component {
    state = { users: [] }
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

