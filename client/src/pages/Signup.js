import React, { Component } from 'react';
import axios from 'axios';
import { Container } from "../components/Grid";
import { Form, Button } from "react-bootstrap";

class Signup extends Component {


	constructor() {
		super()
		this.state = {
			username: '',
			password: ''
		}
		this.handleSubmit = this.handleSubmit.bind(this)
		this.handleChange = this.handleChange.bind(this)
	}
	handleChange(event) {
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	handleSubmit(event) {
		console.log('sign-up handleSubmit, username: ')
		console.log(this.state.username)
		console.log('sign-up handleSubmit, password: ')
		console.log(this.state.password)
		event.preventDefault()

		//request to server to add a new username/password
		axios.post('/signup', {
			username: this.state.username,
			password: this.state.password
		})
			.then(function (response) {
				console.log("THIS IS A RESPONSE: " + response);
				if (response.status===200){
					
					// this.props.history.push("/")
					window.location.href = "/login"
				}
			})
			.catch(function (error) {
				console.log(error.response);
			});
	}


	render() {
		return (
			<Container>
				<h4>Join the Search!</h4>

				<Form>
					<Form.Group controlId="formGroupEmail">
						<Form.Label htmlFor="username">Username</Form.Label>
						<Form.Control
							type="text"
							id="username"
							name="username"
							placeholder="Enter a Cool Username"
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
						onClick={this.handleSubmit}
						type="submit"
						to="/"
						className={
							window.location.pathname === "/"
								? "nav-link active"
								: "nav-link"
						}
					>
						Submit
  					</Button>
					{/* TODO or Logn in link here  */}
				</Form>
			</Container>
		)
	}
}

export default Signup
