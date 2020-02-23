import React, { Component } from "react";
import { Button, Container, Form } from "react-bootstrap";
// import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link, Redirect } from "react-router-dom";
import Footer from "./footer";
import Header from "./header";
// import * as Yup from "yup";

const init = {
	fName: "",
	lName: "",
	dob: "",
	email: "",
	pass: "",
	errfname: "",
	errlname: "",
	errdob: "",
	erremail: "",
	errpass: ""
	// { name: "ajssjd", age: 51 }
};
export class register extends Component {
	state = init;

	validate = () => {
		let erremail = "";
		let errfname = "";
		let errlname = "";
		let errpass = "";
		let errdob = "";
		if (
			!this.state.email.includes("@") ||
			!this.state.email.includes(".com") ||
			this.state.email.length === 0
		) {
			erremail = "invalid or empty email";
			// return false;
		}
		if (erremail) {
			this.setState({ erremail });
			// alert("You have entered an invalid email address!");
			return false;
		}
		if (this.state.pass.length <= 6) {
			errpass = "invalid password";
			// return false;
		}
		if (errpass) {
			this.setState({ errpass });
			// alert("You have entered an invalid password");
			return false;
		}
		if (!this.state.dob.length > 0) {
			errdob = "invalid or empty dob";
			// return false;
		}
		if (errdob) {
			this.setState({ errdob });
			// alert("You have entered an invalid password");
			return false;
		}
		if (!this.state.fName.length > 0) {
			errfname = "empty first name";
			// return false;
		}
		if (errfname) {
			this.setState({ errfname });
			// alert("You have entered an invalid password");
			return false;
		}
		if (!this.state.lName.length > 0) {
			errlname = "empty last name";
			// return false;
		}
		if (errlname) {
			this.setState({ errlname });
			// alert("You have entered an invalid password");
			return false;
		}
		return true;
	};
	updateUser = event => {
		this.setState({
			[event.target.name]: event.target.value
		});
	};

	registerUser = event => {
		event.preventDefault();

		const valid = this.validate();
		if (valid) {
			console.log(this.state);

			localStorage.setItem("firstName", this.state.fName);
			localStorage.setItem("lastName", this.state.lName);
			localStorage.setItem("dob", this.state.dob);
			localStorage.setItem("email", this.state.email);
			localStorage.setItem("password", this.state.pass);
			alert("Registered Successfully");
			this.setState(init);
			this.props.history.push("/");
		}
	};
	render() {
		// const validationSchema = Yup.object().shape({
		// 	email: Yup.string()
		// 		.email("Invalid email")
		// 		.required("Required"),
		// 	password: Yup.string().required("Required"),
		// 	confirmPassword: Yup.string()
		// 		.required("Required")
		// 		.oneOf([Yup.ref("password")], "Password does not match")
		// });
		return (
			<div className="Register">
				<Header />
				<Container style={{ width: "400px" }}>
					{/* <Formik
						onChange={this.updateUser}
						onSubmit={this.registerUser}
						initialValues={this.state}
						validationSchema={validationSchema}
					>
						{({ errors, touched, values, setFieldValue }) => (
							<Form>
								<Field
									name="fName"
									placeholder="First Name"
									// onChange={this.handleChange}
								/>
								<ErrorMessage name="name" component="div" />
								<Field
									name="lName"
									placeholder="Last Name"
									// onChange={this.handleChange}
								/>
								<ErrorMessage name="name" component="div" />
								<Field
									name="email"
									type="email"
									placeholder="Email"
									// onChange={this.handleChange}
								/>
								<ErrorMessage name="email" component="div" />
								<Field
									name="password"
									type="password"
									placeholder="Password"
								/>
								<ErrorMessage name="password" component="div" />
								<Field
									name="confirmPassword"
									type="password"
									placeholder="Confirm password"
									// onChange={this.handleChange}
								/>
								<ErrorMessage
									name="confirmPassword"
									component="div"
								/>
								<Field
									name="dob"
									type="date"
									placeholder="Date of Birth"
									// onChange={this.handleChange}
								/>
								<ErrorMessage name="date" component="div" />
								<button>Submit</button>
							</Form>
						)}
					</Formik> */}
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
							{
								<div style={{ color: "red" }}>
									{this.state.errfname}
								</div>
							}
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
							{
								<div style={{ color: "red" }}>
									{this.state.errlname}
								</div>
							}
						</Form.Group>
						<Form.Group controlId="formBasicDob">
							<Form.Label>Date of Birth</Form.Label>
							<Form.Control
								name="dob"
								type="date"
								required
								onChange={this.updateUser}
							/>
							{
								<div style={{ color: "red" }}>
									{this.state.errdob}
								</div>
							}
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
							{
								<div style={{ color: "red" }}>
									{this.state.erremail}
								</div>
							}
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
							{
								<div style={{ color: "red" }}>
									{this.state.errpass}
								</div>
							}
						</Form.Group>
						<Button
							variant="primary"
							type="submit"
							onClick={this.registerUser}
						>
							{/* <Link style={{ color: "white" }} to="/">
								Sign Up
							</Link> */}
							Submit
						</Button>
					</Form>
				</Container>
				<Footer />
			</div>
		);
	}
}

export default register;
