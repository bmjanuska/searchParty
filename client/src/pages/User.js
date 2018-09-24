import React, { Component } from 'react';
import { Container, Row  } from "../components/Grid";

class User extends Component {

    render() {
        return (
            <div className="User">
                <Container style={{ marginTop: 30 }}>
                    <Row>
                        {/* user Image */}
                        <img src="../images/star-01.svg"/> 
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

