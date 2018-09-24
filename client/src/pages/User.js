import React, { Component } from 'react';
import { Container, Row, Col } from "../components/Grid";

class User extends Component {

    render() {
        return (
            <div className="User">
                <Container style={{ marginTop: 30 }}>
                    <Row>
                        <Col size="sm-3" >
                            {/* user Image */}
                            <img src="../images/star-01.svg" />
                        </Col>
                        <Col size="sm-9" >
                            <h1>User name</h1>
                            {/* user Name */}
                        </Col>
                        {/* user Badges */}
                    </Row>
                    <hr></hr>
                    <Row>
                        <Col size="12">
                            <h2>Accomplishments</h2>
                        </Col>
                    </Row>
                    {/* Challenges */}
                </Container>
            </div>
        );
    }
}

export default User;

