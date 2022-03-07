const { Location } = require("../models");
const auth = process.env.UNSPLASH_KEY;

const getPicture = async (location) => {
	try {
		// retreive first result based on location name
		const response = await fetch(
			`https://api.unsplash.com/photos/random?client_id=${auth}&query=${location}&orientation=landscape`
		);
		if (response.ok) {
			let unsplashObj = response.json();
		}
	} catch (err) {
		console.log(err);
	}
};

module.exports = getPicture;
