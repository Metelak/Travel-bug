const auth = process.env.UNSPLASH_KEY;

// returns the first image result of the location
const getPicture = async (location) => {
	try {
		// retreive first result based on location name (50 requests per hour)
		const response = await fetch(
			`https://api.unsplash.com/search/photos?client_id=${auth}&query=${location}&orientation=landscape`
		);
		if (response.ok) {
			let unsplashObj = response.json();
			return unsplashObj.results[0].urls.raw;
		}
	} catch (err) {
		console.log(err);
		return false;
	}
};

module.exports = getPicture;
