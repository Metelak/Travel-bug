const auth = process.env.UNSPLASH_KEY;

// returns the first image result of the location
const getPicture = async (location) => {
	try {
		// retreive first result based on location name (50 requests per hour)
		// optional orientations are landscape, portrait, squarish
		const response = await fetch(
			`https://api.unsplash.com/search/photos?client_id=${auth}&query=${location}&orientation=landscape`
		);
		if (response.ok) {
			let photoUrl = response.json().results[0].urls.raw;
			// edit w (width) and h (height) to be whatever you'd like
			let editedphoto = `${photoUrl}&w=500&h=300`;
			return editedphoto;
		} else {
			// We could return another photo if there are no results...
			return;
		}
	} catch (err) {
		console.log(err);
		return;
	}
};

module.exports = getPicture;
