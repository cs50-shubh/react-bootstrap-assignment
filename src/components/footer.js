import React, { Component } from "react";
import { Col, Navbar, Row, Container } from "react-bootstrap";

export class footer extends Component {
	style = {
		color: "white",
		textAlign: "center"
	};
	render() {
		return (
			<div className="footer">
				<Navbar fixed="bottom" bg="primary" varient="light">
					<Container>
						<Row className="justify-content-md-center">
							<Col md={{ span: 0, offset: 3 }}>
								{" "}
								<Navbar.Brand style={this.style}>
									© McKinley & Rice 2020
								</Navbar.Brand>{" "}
							</Col>
						</Row>
					</Container>
				</Navbar>
			</div>
		);
	}
}

export default footer;
