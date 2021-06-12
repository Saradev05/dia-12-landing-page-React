import React from "react";

//include images into your bundle
// import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Jumbotron() {
	return (
		<div className="jumbotron text-center mt-5">
			<h1>Welcome to the website</h1>
			<p>
				"Lorem ipsum dolor sit amet consectetur adipiscing elit, sociis
				arcu nisl consequat ad odio ut urna, euismod risus felis
				porttitor enim phasellus. Porta etiam luctus lectus suscipit
				senectus accumsan, pharetra mattis vestibulum sollicitudin ut
				nibh vulputate, nisl sodales pulvinar phasellus maecenas.
				Porttitor pharetra non feugiat facilisis tellus viverra tempor
				sed potenti"
			</p>
			<a href="#" className="btn btn-primary">
				...more information
			</a>
		</div>
	);
}
