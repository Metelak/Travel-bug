const getPicture = require("../../utils/location-pictures");

async function newFormHandler(event) {
	event.preventDefault();

	let title = document
		.querySelector("input[name='location-title']")
		.value.trim();
	let text = document.querySelector("input[name='location-text']").value.trim();

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
		document.location.replace("/travels");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector(".new-location-form")
	.addEventListener("submit", newFormHandler);
