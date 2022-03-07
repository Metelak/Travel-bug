async function loginFormHandler(event) {
	event.preventDefault();

	const email = document.querySelector("#email-login").value.trim();
	const password = document.querySelector("#password-login").value.trim();

	if (email && password) {
		const response = await fetch("/api/users/login", {
			method: "post",
			body: JSON.stringify({
				email,
				password
			}),
			headers: { "Content-Type": "application/json" }
		});

		if (response.ok) {
			document.location.replace("/travels");
		} else {
			alert(response.statusText);
		}
	}
}

async function newuserFormHandler(event) {
	event.preventDefault();

	const username = document.querySelector("#username-newuser").value.trim();
	const email = document.querySelector("#email-newuser").value.trim();
	const password = document.querySelector("#password-newuser").value.trim();

	if (username && email && password) {
		const response = await fetch("/api/users", {
			method: "post",
			body: JSON.stringify({
				username,
				email,
				password
			}),
			headers: { "Content-Type": "application/json" }
		});

		if (response.ok) {
			document.location.replace("/travels");
		} else {
			alert(response.statusText);
		}
	}
}

document
	.querySelector(".login-form")
	.addEventListener("submit", loginFormHandler);

document
	.querySelector(".newuser-form")
	.addEventListener("submit", newuserFormHandler);
