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

	if (rating) {
		const response = await fetch("/api/ratings/", {
			method: "POST",
			body: JSON.stringify({
				rating,
				location_id
			}),
			headers: {
				"Content-Type": "application/json"
			}
		});

		if (response.ok) {
			document.location.replace(`/location/${location_id}`);
		} else {
			alert(response.statusText);
		}
	}
}

$(".rating-form").on("submit", ratingHandler);
