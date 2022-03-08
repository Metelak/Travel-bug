async function deleteFormHandler(event) {
	event.preventDefault();

	const id = window.location.toString().split("/")[
		window.location.toString().split("/").length - 1
	];
	const response = await fetch(`/api/locations/${id}`, {
		method: "DELETE"
	});

	if (response.ok) {
		document.location.replace("/travels/");
	} else {
		alert(response.statusText);
	}
}

document
	.querySelector(".delete-location-btn")
	.addEventListener("click", deleteFormHandler);
