import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'
import { Container } from "../components/Grid";
import { Form, Button } from "react-bootstrap";
import AuthHelperMethods from '../components/AuthHelperMethods'

class Login extends Component {

    Auth = new AuthHelperMethods();
    
    constructor() {
        super()
        this.state = {
            username: '',
            password: ''
        }
        this.handleFSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)

    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleFormSubmit = e => {
        e.preventDefault();
      
        /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
        this.Auth.login(this.state.username, this.state.password)
          .then(res => {
            if (res === false) {
              return alert("Sorry those credentials don't exist!");
            }
            this.props.history.replace("/");
          })
          .catch(err => {
            alert(err);
          });
      };

    // handleSubmit(event) {
    //     console.log('login handleSubmit, username: ')
    //     console.log(this.state.username)
    //     console.log('login handleSubmit, password: ')
    //     console.log(this.state.password)
    //     event.preventDefault()


    //     axios
    //         .post('/login', {
    //             username: this.state.username,
    //             password: this.state.password
    //         })
    //         .then(response => {
    //             console.log('login response: ')
    //             console.log(response)
    //             if (response.status === 200) {
    //                 // update App.js state
    //                 this.props.updateUser({
    //                     loggedIn: true,
    //                     username: response.data.username
    //                 })
    //                 // update the state to redirect to home
    //                 this.setState({
    //                     redirectTo: '/'
    //                 })
    //             }
    //         }).catch(error => {
    //             console.log('login error: ')
    //             console.log(error);

    //         })
    // }
    
    componentWillMount() {

        /* Here is a great place to redirect someone who is already logged in to the protected route */
        if (this.Auth.loggedIn()){
            this.props.history.replace('/');
          }
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return (
                <Container>
                    <h4>Login</h4>
                    <Form>
                        <Form.Group controlId="formGroupEmail">
                            <Form.Label htmlFor="username">Username</Form.Label>
                            <Form.Control
                                type="text"
                                id="username"
                                name="username"
                                placeholder="Your Cool Username"
                                value={this.state.username}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Form.Group controlId="formGroupPassword">
                            <Form.Label htmlFor="password">Password</Form.Label>
                            <Form.Control
                                placeholder="password"
                                type="password"
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange}
                            />
                        </Form.Group>
                        <Button
                            // variant="primary" 
                            className="btn-pink"
                            onClick={this.handleSubmit}
                            type="submit"
                        >
                            Login
  					</Button>
                        {/* TODO or sign in link here  */}
                    </Form>
                </Container>
            )
        }
    }
}

export default Login
// ================================ \\
// handleFormSubmit = e => {
//     e.preventDefault();
  
//     /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
//     this.Auth.login(this.state.username, this.state.password)
//       .then(res => {
//         if (res === false) {
//           return alert("Sorry those credentials don't exist!");
//         }
//         this.props.history.replace("/");
//       })
//       .catch(err => {
//         alert(err);
//       });
//   };
  