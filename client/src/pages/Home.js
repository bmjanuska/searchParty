import React, { Component } from 'react';
import { Container, Row, Col } from "../components/Grid";
import Banner from '../components/Banner';
import axios from 'axios';


class Home extends Component {
    state = {
        users: [],
        challenges: []
    }

    componentDidMount() {
        axios.get("/api/challenges")
            .then(res => {
                this.setState({
                    challenges: res.data
                })
                console.log(res);
            })
    }

    render() {
        return (
            <div className="Home">
                <Banner />
                <Container>
                    <Row>
                        <h1>Challenges</h1>

                        
                    </Row>
                    {/* Challenges */}
                    {this.state.challenges.map(item => {
                        return (
                            <Row key={item.id}>
                                <Col size="sm-12 md-8">
                                    {/* challenge name */}
                                    <h3 className="Challenge Name">{item.name}</h3>
                                    {/* number of places in the challenge */}
                                    <h4># Places</h4>
                                    <br></br>
                                </Col>
                                <Col size="sm-12 md-4">
                                    {/* begin challenge and make this update the challenge page to make this current challenge  */}
                                    <button href="#" className="btn btn-purple text-right">Start Challenge</button>
                                </Col>
                            </Row>
                        );
                    })}


                </Container>
            </div>
        );
    }
}

export default Home;

