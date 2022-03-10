// front-end js for user to like a location
// and correlate likes with travels.handlebars
// so the user can see their liked locations in My Travels when logged in

async function likeHandler(event) {
	event.preventDefault();

	const id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];

	const response = await fetch("/api/likes", {
		method: "PUT",
		body: JSON.stringify({
			location_id: id
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

$(".like-btn").on("like", likeHandler);
