async function newFormHandler(event) {
	event.preventDefault();

	const title = document.querySelector("input[name='location-title']").value;
	const text = document.querySelector(
		"input[name='location-text']"
	).value;

	const response = await fetch("/api/locations", {
		method: "POST",
		body: JSON.stringify({
			title,
			post_url
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
