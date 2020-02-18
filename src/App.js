import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
// import Person from "./Public/Person";
import Login from "./components/login";
import Profile from "./components/profile";
// import Register from "./components/register";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Register from "./components/register";
import Update from "./components/update";

class App extends Component {
	// constructor(props) {
	// 	super(props);
	// }
	// state = {
	// 	fName: "",
	// 	lName: "",
	// 	dob: "",
	// 	email: "",
	// 	pass: ""
	// 	// { name: "ajssjd", age: 51 }
	// };
	// logUser = () => {
	// 	console.log(this.state.email);
	// };

	// handleParentData = formModel => {
	// 	this.setState({ ...formModel });
	// };
	render() {
		return (
			<Router>
				<div>
					<Switch>
						<Route path="/" exact component={Login} />
						<Route path="/register" component={Register} />
						<Route path="/login" component={Login} />
						<Route path="/profile" component={Profile} />
						<Route path="/update" component={Update} />
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;

// import React, { useState } from "react";
// import { Component } from "react";
// import logo from "./logo.svg";
// import "./App.css";
// import Person from "./Public/Person";

// // React Hooks example.
// // Most important usecase
// class App extends Component {
// 	nameChangedHandler = event => {
// 		this.setState
// 	}
// 	render () {
// 		return (

// 		);
// 	}
// }
// const app = props => {
// 	const [personsState, setPersonsState] = useState({
// 		persons: [
// 			{ name: "shubh", age: 20 },
// 			{ name: "ajssjd", age: 51 },
// 			{ name: "sjhdb", age: 84 }
// 		],
// 		otherState: "sbdjfbdjn"
// 	});
// 	//we can use multiple useStates.
// 	const [otherState, setOtherState] = useState("some other value");
// 	console.log(personsState, otherState);

// 	const switchNameHandler = newName => {
// 		setPersonsState({
// 			persons: [
// 				{ name: newName, age: 20 },
// 				{ name: "ajssjd", age: 51 },
// 				{ name: "sjhdb", age: 25 }
// 			],
// 			otherState: "sbdjfbdjn" //to keep otherState data safe and updated.
// 		});
// 	};

// 	return (
// 		<div className="App">
// 			<h1>Main App.js</h1>
// 			<button onClick={switchNameHandler.bind(this, "Maxmillian..")}>
// 				Switch Name
// 			</button>
// 			<Person
// 				name={personsState.persons[0].name}
// 				age={personsState.persons[0].age}
// 			/>
// 			<Person
// 				name={personsState.persons[1].name}
// 				age={personsState.persons[1].age}
// 				click={switchNameHandler.bind(this, "Max")}
// 			>
// 				Agri
// 			</Person>
// 			<Person
// 				name={personsState.persons[2].name}
// 				age={personsState.persons[2].age}
// 			/>
// 		</div>
// 	);
// };

// export default app;
