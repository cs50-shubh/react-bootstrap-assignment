import React, { Component } from "react";
import { Button, Navbar, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import Footer from "./footer";

export class update extends Component {
	state = {
		fName: localStorage.getItem("firstName"),
		lName: localStorage.getItem("lastName"),
		dob: localStorage.getItem("dob"),
		email: localStorage.getItem("email"),
		pass: localStorage.getItem("password")
	};
	updateState = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};
	updateUser = () => {
		localStorage.setItem("firstName", this.state.fName);
		localStorage.setItem("lastName", this.state.lName);
		localStorage.setItem("dob", this.state.dob);
		localStorage.setItem("email", this.state.email);
		localStorage.setItem("password", this.state.pass);
		// alert("Registered Successfully");
	};
	render() {
		return (
			<div onLoad={this.updateUser} className="Register">
				<Navbar expand="lg" variant="light" bg="light" sticky="top">
					<Container>
						<Navbar.Brand href="#">Update User</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Button variant="success">
								<Link
									style={{ color: "white" }}
									to={"/profile"}
								>
									Back To Profile
								</Link>
							</Button>
							{/* <Navbar.Text>
								Signed in as: <a href="#login">Mark Otto</a>
							</Navbar.Text> */}
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Container>
					<Form className="mt-5">
						<Form.Group controlId="formBasicFirstName">
							<Form.Label>First Name</Form.Label>
							<Form.Control
								type="text"
								placeholder="First Name"
								name="fName"
								value={this.state.fName}
								onChange={this.updateState}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicLastName">
							<Form.Label>Last Name</Form.Label>
							<Form.Control
								name="lName"
								type="text"
								placeholder="Last Name"
								value={this.state.lName}
								onChange={this.updateState}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicDob">
							<Form.Label>Date of Birth</Form.Label>
							<Form.Control
								name="dob"
								type="date"
								value={this.state.dob}
								onChange={this.updateState}
							/>
						</Form.Group>
						<Form.Group controlId="formBasicEmail">
							<Form.Label>Email address</Form.Label>
							<Form.Control
								type="email"
								name="email"
								placeholder="Enter email"
								value={this.state.email}
								onChange={this.updateState}
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
								placeholder="Password"
								value={this.state.pass}
								onChange={this.updateState}
							/>
						</Form.Group>
						{/* <Form.Group controlId="formBasicCheckbox">
							<Form.Check type="checkbox" label="Check me out" />
						</Form.Group> */}
						<Button
							variant="warning"
							type="submit"
							onClick={this.updateUser}
						>
							<Link style={{ color: "white" }} to="/profile">
								Update
							</Link>
						</Button>
					</Form>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default update;
