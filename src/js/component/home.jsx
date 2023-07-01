import React from "react";
import Jumbotron from "./jumbotron";
import Navbar from "./navbar";
import Card from "./card";
//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<Navbar />
			<div className="container-fluid">
				<Jumbotron />
				<div className="row">
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
