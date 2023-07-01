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
						<Card imgURL="https://i.pinimg.com/originals/d1/73/59/d173596bfc14577a6a6e923b2c25d71a.gif" />
					</div>
					<div className="col">
						<Card />
					</div>
					<div className="col">
						<Card cardText="This card does have some text. I guess you're not a goober" />
					</div>
					<div className="col">
						<Card cardTitle="Custom Title" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
