import React from "react";
import PropTypes from "prop-types";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Card(props) {
	return (
		<div className="card" style={{ width: "20rem" }}>
			<p>
				<img
					className="card-img-top"
					src="https://via.placeholder.com/500x325"
				/>
			</p>
			<div className="card-body">
				<h4 className="card-title">{props.name}</h4>
				<p>{props.description}</p>
				<a className="btn btn-primary" href="#">
					Open card
				</a>
			</div>

			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
		</div>
	);
}

Card.prototypes = {
	name: PropTypes.string,
	description: PropTypes.string
};
