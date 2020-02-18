import React from "react";
import "./Person.css";
const person = props => {
	return (
		<div className="Person">
			<h1 onClick={props.click}>
				Hi, {props.name} akhdbchkasbc {props.age} kauedfh
			</h1>
			<p> {props.children} </p>
			{/* two-way-binding of data below */}
			<input type="text" onChange={props.changed} value={props.name} />
		</div>
	);
};
export default person;
