const { Location } = require("../models");

const auth = process.env.UNSPLASH_KEY;

// Unsplash url
// !Only allows 50 requests per hour
const unsplash = "https://api.unsplash.com/photos/random";

const getPicture = (location) => {};
