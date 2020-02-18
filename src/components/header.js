import React, { Component } from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";

export class header extends Component {
	render() {
		const url = window.location.href;
		const l = url.length;
		let page = url.slice(22, l).toUpperCase();
		let btn = "";
		let btnUrl = "";
		if (page === "REGISTER") {
			btn = "Login";
			btnUrl = "login";
		} else {
			page = "LOGIN";
			btn = "Register";
			btnUrl = "register";
		}
		return (
			<div>
				<Navbar expand="lg" variant="light" bg="light" sticky="top">
					<Container>
						<Navbar.Brand href="#">{page}</Navbar.Brand>
						<Navbar.Toggle />
						<Navbar.Collapse className="justify-content-end">
							<Button variant="success">
								<Link
									style={{ color: "white" }}
									to={"/" + btnUrl}
								>
									{btn}
								</Link>
							</Button>

							{/* <Navbar.Text>
								Signed in as: <a href="#login">Mark Otto</a>
							</Navbar.Text> */}
						</Navbar.Collapse>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default header;
