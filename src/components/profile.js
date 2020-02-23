import React, { Component } from "react";
import { Navbar, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Container, Col, Row, Table } from "react-bootstrap";
import img from "./assets/user.png";
import Footer from "./footer";

export class profile extends Component {
	state = {
		user: [
			{ key: "first_Name", value: localStorage.getItem("firstName") },
			{ key: "last_Name", value: localStorage.getItem("lastName") },
			{ key: "email", value: localStorage.getItem("email") },
			{ key: "password", value: localStorage.getItem("password") },
			{ key: "dob", value: localStorage.getItem("dob") }
		],
		showPerson: true
	};
	// deleteField = event => {
	// 	localStorage.removeItem(event);
	// };
	render() {
		let data: null;
		if (this.state.showPerson === true) {
			data = (
				<tbody>
					{this.state.user.map((dat, idx) => {
						return (
							<tr>
								<td>{dat.key}</td>
								<td> {dat.value}</td>
							</tr>
						);
					})}
					<tr>
						<td>
							{" "}
							<Button variant="warning">
								<Link style={{ color: "black" }} to={"/update"}>
									Edit
								</Link>
							</Button>
						</td>
						<td>
							<Button
								onClick={() => {
									localStorage.clear();
								}}
								variant="danger"
							>
								<Link style={{ color: "black" }} to={"/"}>
									Delete
								</Link>
							</Button>
						</td>
					</tr>
				</tbody>
			);
		}
		return (
			<div>
				<Navbar expand="lg" variant="light" bg="light" sticky="top">
					<Container>
						<Navbar.Brand href="#">
							Hello, {localStorage.getItem("firstName")}
						</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Button variant="success">
								<Link style={{ color: "white" }} to={"/"}>
									{" "}
									Logout
								</Link>
							</Button>

							{/* <Navbar.Text>
								Signed in as: <a href="#login">Mark Otto</a>
							</Navbar.Text> */}
						</Navbar.Collapse>
					</Container>
				</Navbar>
				<Card className="text-center" style={{ width: "100%" }}>
					<Container>
						<Row>
							<Col sm={4}>
								{" "}
								<Card.Img
									variant="top"
									src={img}
									style={{
										width: "150px",
										borderRadius: "50%",
										marginTop: "50px",
										marginRight: "200px"
									}}
								/>
							</Col>
							<Col sm={8}>
								{" "}
								<Card.Body>
									<Card.Title>
										<h3>
											Welcome To MckinleyRice Employee
											Portal
										</h3>
									</Card.Title>
									<br />
									<Card.Text>
										<Table striped bordered hover>
											<thead>
												<tr>
													<th>Record Index</th>
													<th>Value</th>
												</tr>
											</thead>
											{data}
										</Table>
									</Card.Text>
								</Card.Body>
							</Col>
						</Row>
					</Container>
				</Card>
				<Footer />
			</div>
		);
	}
}

export default profile;
