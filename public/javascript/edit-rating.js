var rating = null;
var ratingId;

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
	ratingId = userRatingObj[0].id;

	$("#star-rating").raty({
		path: "/img",
		score: userRatingObj[0].rating,
		click: (points) => {
			rating = points;
		}
	});
}

async function ratingUpdateHandler() {
	if (rating) {
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
			document.location.replace(
				`/travels/edit/${window.location.href.split("/").slice(-1).toString()}`
			);
		} else {
			alert(response.statusText);
		}
	}
}

$("#rating-btn").on("click", ratingUpdateHandler);
$(document).ready(getCurrentRating());
