var rating = null;
var ratingId;
var ratingLength;

async function updateRating() {
	const response = await fetch(`/api/ratings/${ratingId}`, {
		method: "PUT",
		body: JSON.stringify({
			rating: rating
		}),
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (response.ok) {
		document.location.reload();
	} else {
		alert(response.statusText);
	}
}

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
	ratingLength = userRatingObj.length;
	if (ratingLength) {
		ratingId = userRatingObj[0].id;
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

	if (rating) {
		if (ratingLength) {
			if (
				confirm(`Would you like to update your rating to ${rating}?`) === true
			) {
				return updateRating();
			} else {
				return;
			}
		}

		const ratingResponse = await fetch("/api/ratings/", {
			method: "POST",
			body: JSON.stringify({
				rating,
				location_id: window.location.href.split("/").slice(-1).toString()
			}),
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (ratingResponse.ok) {
			document.location.reload();
		} else {
			alert(ratingResponse.statusText);
		}
	}
}

$(".rating-form").on("submit", ratingHandler);
$(document).ready(getCurrentRating());
