import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";

export class register extends Component {
	state = {
		fName: "",
		lName: "",
		dob: "",
		email: "",
		pass: ""
		// { name: "ajssjd", age: 51 }
	};
	updateUser = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	registerUser = () => {
		localStorage.setItem("firstName", this.state.fName);
		localStorage.setItem("lastName", this.state.lName);
		localStorage.setItem("dob", this.state.dob);
		localStorage.setItem("email", this.state.email);
		localStorage.setItem("password", this.state.pass);
		alert("Registered Successfully");
	};
	render() {
		return (
			<div className="Register">
				<Header />
				<Container>
					<Form className="mt-5">
						<Form.Group controlId="formBasicFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="First Name"
								name="fName"
								required
								onChange={this.updateUser}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								name="lName"
								type="text"
								required
								placeholder="Last Name"
								onChange={this.updateUser}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicDob">
							<Form.Label>Date of Birth</Form.Label>
							<Form.Control
								name="dob"
								type="date"
								required
								onChange={this.updateUser}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								required
								placeholder="Enter email"
								onChange={this.updateUser}
							/>
							{/* <Form.Text className="text-muted">
								We'll never share your email with anyone else.
							</Form.Text> */}
						</Form.Group>

						<Form.Group controlId="formBasicPassword">
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								name="pass"
								required
								placeholder="Password"
								onChange={this.updateUser}
							/>
						</Form.Group>
						{/* <Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group> */}
						<Button
							variant="primary"
							type="submit"
							onClick={this.registerUser}
						>
							<Link style={{ color: "white" }} to="/">
								Sign Up
							</Link>
						</Button>
					</Form>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default register;
