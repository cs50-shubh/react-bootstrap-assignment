import React, { Component } from "react";

import { Button, Container, Form } from "react-bootstrap";
import Footer from "./footer";
import Header from "./header";

export class login extends Component {
	state = {
		email: "",
		password: ""
	};
	setCred = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
		// console.log(this.state.email);
		// console.log(this.state.password);
	};
	userAuth = () => {
		if (
			localStorage.getItem("email") === this.state.email &&
			localStorage.getItem("password") === this.state.password
		) {
			this.props.history.push("/profile");
		} else {
			alert("Invalid Credentials");
		}
	};
	render() {
		return (
			<div className="Login">
				<Header />
				<Container>
					<Form className="mt-5">
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								required
								placeholder="Enter email"
								onChange={this.setCred}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="password"
								required
								placeholder="Password"
								onChange={this.setCred}
							/>
						</Form.Group>
						<Button onClick={this.userAuth} variant="primary">
							Login
						</Button>
					</Form>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default login;
