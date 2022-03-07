const getPicture = require("../../utils/location-pictures");

async function newFormHandler(event) {
	event.preventDefault();

	const title = document
		.querySelector("input[name='location-title']")
		.value.trim();
	const text = document
		.querySelector("input[name='location-text']")
		.value.trim();

	const locationPicture = await getPicture(title);

	const response = await fetch("/api/locations", {
		method: "POST",
		body: JSON.stringify({
			title,
			text,
			locationPicture
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

document
	.querySelector(".new-location-form")
	.addEventListener("submit", newFormHandler);
