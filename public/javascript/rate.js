var rating = null;

async function getCurrentRating() {
	const userRating = await fetch("/api/ratings/check-user-ratings", {
		method: "POST",
		body: JSON.stringify({
			location_id: window.location.href.split("/").slice(-1).toString()
		}),
		headers: {
			"Content-Type": "application/json"
		}
	});

	const userRatingObj = await userRating.json();

	if (userRatingObj.length) {
		$("#star-rating").raty({
			path: "/img",
			score: userRatingObj[0].rating,
			click: (points) => {
				rating = points;
			}
		});
	} else {
		$("#star-rating").raty({
			path: "/img",
			click: (points) => {
				rating = points;
			}
		});
	}
}

async function ratingHandler(event) {
	event.preventDefault();

	// define variables
	let location_id = window.location.href.split("/").slice(-1).toString();

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
		return alert("You have already rated this location!");
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
$(document).ready(getCurrentRating());
