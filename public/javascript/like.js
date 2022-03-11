//var like = null;

//const req = require("express/lib/request");

// $("#star-like").raty({
// 	path: "/img",
// 	click: (score) => {
// 		like = score;
// 	}
// });

async function likeHandler(event) {
	event.preventDefault();

	// define variables
	let id = window.location.href.split("/").slice(-1).toString();
	// let id = window.location.toString().split("/")[
	// 	window.location.toString().split("/").length - 1
	// ];

	// const checkUserlikes = await fetch("/api/likes/check-user-likes", {
	// 	method: "POST",
	// 	body: JSON.stringify({
	// 		location_id
	// 	}),
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 	}
	// });
	// const userlike = await checkUserlikes.json();

	// if (userlike.length >= 1) {
	// 	return alert("You have already liked this location!");
	// }else {
	// const likeResponse = await fetch("/api/likes/", {
	// 	method: "PUT",
	// 	body: JSON.stringify({
	// 		location_id
	// 	}),
	// 	headers: {
	// 		"Content-Type": "application/json"
	// 	}
	// });
	const likeResponse = await fetch("/api/locations/ulike", {
		method: "PUT",
		body: JSON.stringify({
			location_id: id
			//user_id: req.session.user_id

		}),
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (likeResponse.ok) {
		document.location.replace(`/location/${location_id}`);
	} else {
		alert(likeResponse.statusText);
	}
	//}
}

// $(".like-form").on("submit", likeHandler);
document
	.querySelector("#like-button")
	.addEventListener("click", likeHandler);

