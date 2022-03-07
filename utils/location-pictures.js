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
			console.log(photoUrl);
			// edit w (width) and h (height) to be whatever you'd like
			// this url explains some options for messing with the fit parameter https://docs.imgix.com/apis/rendering/size/fit
			let editedphoto = `${photoUrl}&w=500&h=300&fit=fillmax`;
			return editedphoto;
		} else {
			return null;
		}
	} catch (err) {
		console.log(err);
		return null;
	}
};

module.exports = getPicture;
