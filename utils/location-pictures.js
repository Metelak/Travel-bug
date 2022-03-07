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
			let photoUrl = response.json().results[0].urls.raw;
			// edit w (width) and h (height) to be whatever you'd like
			// this url explains some options for messing with the fit parameter https://docs.imgix.com/apis/rendering/size/fit
			let editedphoto = `${photoUrl}&w=500&h=300&fit=fillmax`;
			return editedphoto;
		} else {
			// We could return another photo if there are no results... Let's try and find a placeholder and insert the url here
			return;
		}
	} catch (err) {
		console.log(err);
		return;
	}
};

module.exports = getPicture;
