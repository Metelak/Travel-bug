var rating = null;

$("#star-rating").raty({
	path: "/img",
	click: (score) => {
		rating = score;
	}
});

async function ratingHandler(event) {
	event.preventDefault();
	console.log("it worked");
	console.log(rating);
}

$(".rating-form").on("submit", ratingHandler);
