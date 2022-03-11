async function editFormHandler(event) {
	event.preventDefault();

	const title = document.querySelector("input[name='location-title']").value.trim();
	const text = document.querySelector("textarea[name='location-text']").value.trim();
	const id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];
	const response = await fetch(`/api/locations/${id}`, {
		method: "PUT",
		body: JSON.stringify({
			title,
			text
		}),
		headers: {
			"Content-Type": "application/json"
		}
	});

	if (response.ok) {
		document.location.replace("/travels/");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector(".edit-location-form")
	.addEventListener("submit", editFormHandler);
