var rating = null;

$("#star-rating").raty({
	path: "/img",
	click: (score) => {
		rating = score;
	}
});

// create a new rating in the db
async function createRating(postData) {
	let postId = postData.id;

	const response = await fetch("/api/ratings", {
		method: "POST",
		body: JSON.stringify({
			location_id: postId,
			rating: rating
		}),
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (response.ok) {
		document.location.replace("/travels");
	} else {
		alert(response.statusText);
	}
}

async function newFormHandler(event) {
	event.preventDefault();

	// get values from user input
	const title = document
		.querySelector("input[name='location-title']")
		.value.trim();
	const text = document
		.querySelector("textarea[name='location-text']")
		.value.trim();

	if (title && text && rating) {
		// post request to api
		const response = await fetch("/api/locations", {
			method: "POST",
			body: JSON.stringify({
				title,
				text
			}),
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (response.ok) {
			const responseObj = await response.json();
			createRating(responseObj);
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector(".new-location-form")
	.addEventListener("submit", newFormHandler);
