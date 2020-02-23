import React, { Component } from "react";
import axios from "axios";
import { Button, Container, Form } from "react-bootstrap";
import Footer from "./footer";
import Header from "./header";

export class login extends Component {
	state = {
		email: "",
		password: "",
		error: {
			emailError: true,
			passError: ""
		},
		message: ""
	};
	setCred = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
		// console.log(this.state.email);
		// console.log(this.state.password);
	};
	userAuth = () => {
		if (this.state.email) {
			if (
				/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
					this.state.email
				)
			) {
				let id = "5e4fe86a16f6183324e2e7ba";
				let email = this.state.email;
				let password = this.state.password;
				if (
					axios
						.get(`http://localhost:8080/users/${id}?format=json`, {
							headers: {
								"Access-Control-Allow-Origin": "*",
								"Access-Control-Allow-Methods":
									"GET,PUT,POST,DELETE,PATCH,OPTIONS"
							}
						})
						.then(async res => {
							console.log(res);
							console.log(res.data);
						})
				) {
					this.props.history.push("/profile");
					return true;
				} else {
					alert("Invalid Credentials");
					return false;
				}
			}
			this.setState({ message: "Invalid Email" });
			alert("You have entered an invalid email address!");
			return false;
		}
	};
	render() {
		return (
			<div className="Login">
				<Header />
				<Container style={{ width: "20rem" }}>
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
