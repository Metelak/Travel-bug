const seedUsers = require("./seedUser");
const seedLocations = require("./seedLocation");
const seedComments = require("./seedComment");
const seedRatings = require("./seedRating");
const seedLikes = require("./seedLike");

const sequelize = require("../config/connection");

const seedAll = async () => {
	try {
		await sequelize.sync({ force: true });
		console.log("\n----- DATABASE SYNCED -----\n");

		await seedUsers();
		console.log("\n----- USERS SYNCED -----\n");

		await seedLocations();
		console.log("\n----- LOCATIONS SYNCED -----\n");

		await seedComments();
		console.log("\n----- COMMENTS SYNCED -----\n");

		await seedRatings();
		console.log("\n----- RATINGS SYNCED -----\n");

		await seedLikes();
		console.log("\n----- LIKES SYNCED -----\n");

		process.exit();
	} catch (err) {
		console.log(err);
	}
};

seedAll();
