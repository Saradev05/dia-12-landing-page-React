import React from "react";
// import PropTypes from "prop-types";

// //include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
import { Navbar } from "./navbar.js";
import { Jumbotron } from "./jumbotron.js";
import { Card } from "./card.js";

export function Home() {
	return (
		<div className="text-center mt-5">
			<Navbar />
			<Jumbotron />
			<div className="container-fluid">
				<div className="row">
					<div className="col-3">
						<Card
							name="card1"
							description="Porta etiam luctus lectus suscipit
				senectus accumsan"
						/>
					</div>
					<div className="col-3">
						<Card
							name="card2"
							description="Porta etiam luctus lectus suscipit
				senectus accumsan"
						/>
					</div>
					<div className="col-3">
						<Card
							name="card3"
							description="Porta etiam luctus lectus suscipit
				senectus accumsan"
						/>
					</div>
					<div className="col-3">
						<Card
							name="card4"
							description="Porta etiam luctus lectus suscipit
				senectus accumsan"
						/>
					</div>
				</div>
			</div>

			<p>
				Made by <a>Sara Canton</a>
			</p>
		</div>
	);
}
