import React, { Component } from 'react';
import { Container } from "../components/Grid";
import UserIcon from '../components/UserIcon';
import { Hbar } from "../components/Bars";
import { Row, Col } from "react-bootstrap";

class User extends Component {

    render() {
        return (
            <div className="User">
                <Container style={{ marginTop: 30 }}>
                    <Row>
                        <Col sm={3}>
                            {/* user Image */}
                            <UserIcon />
                            {/* <img src="../images/star-01.svg" /> */}
                        </Col>
                        <Col sm={9}>
                            {/* user Name */}
                            <h1>User Name</h1>
                            {/* user rank */}
                            <Hbar />
                            <h3>User Rank</h3>
                            <h3>Completed: # Challenges</h3>
                        </Col>
                        {/* user Badges */}
                    </Row>
                    <Hbar />
                    <Row>
                        <Col md={12}>
                            <h2>Badges</h2>
                        </Col>
                        <Col md={12}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque at quam bibendum, sodales elit ac, volutpat dui. Ut rutrum purus ipsum, ut mollis tellus facilisis non. Fusce viverra commodo luctus. Pellentesque ullamcorper arcu quis velit pulvinar, a convallis nisl pellentesque. Mauris eget arcu orci. Integer eget orci pellentesque, auctor erat eget, malesuada nisi. Sed bibendum tellus a sagittis auctor. Vivamus turpis quam, placerat non arcu at, posuere ultrices nibh. Duis ut commodo nunc. Etiam commodo blandit lobortis. Aliquam fermentum convallis consectetur. Quisque finibus metus ac sem sollicitudin vehicula. Cras gravida iaculis nisi, at mollis dui molestie vitae.</p>
                        </Col>
                        <Col md={12}>
                            <button className="btn btn-success">
                                Search
                            </button>
                            <button className="btn btn-purple">
                                Search
                            </button>
                            <button className="btn btn-pink">
                                Search
                            </button>
                            <button className="btn btn-blue">
                                Search
                            </button>
                            <button className="btn btn-yellow">
                                Search
                            </button>

                        </Col>
                    </Row>
                    {/* Challenges */}
                </Container>
            </div>
        );
    }
}

export default User;

