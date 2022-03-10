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
	$("#star-rating").data("score", userRatingObj[0].rating);
}

$("#star-rating").raty({
	path: "/img",
	click: (points) => {
		rating = points;
	}
});

async function ratingUpdateHandler(event) {
	event.preventDefault();

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

$(".rating-form").on("sumbit", ratingUpdateHandler);
$(document).ready(getCurrentRating());
