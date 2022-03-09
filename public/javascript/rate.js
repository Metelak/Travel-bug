var rating = null;

$("#star-rating").raty({
	path: "/img",
	click: (score) => {
		rating = score;
	}
});

async function ratingHandler(event) {
	event.preventDefault();

	console.log(rating);
	// define variables
	let location_id = location.href.split("/").slice(-1).toString();

	const checkUserRatings = await fetch("/api/ratings/check-user-ratings", {
		method: "POST",
		body: JSON.stringify({
			location_id
		}),
		headers: {
			"Content-Type": "application/json"
		}
	});
	const userRating = await checkUserRatings.json();

	if (userRating.length >= 1) {
		return alert("You have already left a rating on this location!");
	}

	if (rating) {
		const ratingResponse = await fetch("/api/ratings/", {
			method: "POST",
			body: JSON.stringify({
				rating,
				location_id
			}),
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (ratingResponse.ok) {
			document.location.replace(`/location/${location_id}`);
		} else {
			alert(ratingResponse.statusText);
		}
	}
}

$(".rating-form").on("submit", ratingHandler);
