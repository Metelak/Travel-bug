async function newFormHandler(event) {
	event.preventDefault();

	// get values from user input
	const title = document
		.querySelector("input[name='location-title']")
		.value.trim();
	const text = document
		.querySelector("input[name='location-text']")
		.value.trim();

	if (title && text) {
		// post request to api
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
}

document
	.querySelector(".new-location-form")
	.addEventListener("submit", newFormHandler);
