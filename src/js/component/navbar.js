import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Navbar() {
	return (
		<div className="text-center mt-5">
			<navbar className="navbar navbar-expand-lg  navbar-primary bg-dark">
				<p className="navbar-brand" href="#">
					Home
				</p>
			</navbar>
		</div>
	);
}
