const fetch = require("node-fetch");
const auth = process.env.UNSPLASH_KEY;

// returns the first image result of the location (enter location name into the parameters)
const getPicture = async (location) => {
	try {
		// retreive first result based on location name (50 requests per hour)
		// optional orientations are: landscape, portrait, and squarish
		const response = await fetch(
			`https://api.unsplash.com/search/photos?client_id=${auth}&query=${location}&orientation=landscape`
		);
		if (response.ok) {
			let photo = await response.json();
			let photoUrl = photo.results[0].urls.raw;
			return photoUrl;
		} else {
			return null;
		}
	} catch (err) {
		console.log(err);
		return null;
	}
};

module.exports = getPicture;
