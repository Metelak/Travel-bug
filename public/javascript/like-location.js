// front-end js for user to like a location
// and correlate likes with travels.handlebars
// so the user can see their liked locations in My Travels when logged in

async function likeHandler(event) {
	event.preventDefault();

	const locationId = event.target.getAttribute("data-location");

	const alreadyLiked = await fetch("/api/likes/already-liked", {
		method: "POST",
		body: JSON.stringify({
			location_id: locationId
		}),
		headers: {
			"Content-Type": "application/json"
		}
	});
	const alreadyLikedObj = await alreadyLiked.json();
	if (alreadyLikedObj.length >= 1) {
		alert("You have already liked this location!");
		return;
	}

	const response = await fetch("/api/likes/", {
		method: "POST",
		body: JSON.stringify({
			location_id: locationId
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

$(document).on("click", "#like-button", likeHandler);
