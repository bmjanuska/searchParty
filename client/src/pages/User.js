import React, { Component } from 'react';
import { Container, Row, Col } from "../components/Grid";

class User extends Component {

    render() {
        return (
            <div className="User">
                <Container style={{ marginTop: 30 }}>
                    <Row>
                        {/* user Image */}
                        <img /> 
                        <h1>User name</h1>
                        {/* user Name */}
                        {/* user Badges */}
                    </Row>

                    {/* Challenges */}
                </Container>
            </div>
        );
    }
}

export default User;

