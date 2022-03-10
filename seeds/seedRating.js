const { Rating } = require("../models");

const ratingdata = [
	{
		rating: 5,
		user_id: 7,
		location_id: 3
	},
	{
		rating: 4,
		user_id: 10,
		location_id: 6
	},
	{
		rating: 3,
		user_id: 4,
		location_id: 8
	},
	{
		rating: 4,
		user_id: 8,
		location_id: 5
	},
	{
		rating: 5,
		user_id: 6,
		location_id: 5
	},
	{
		rating: 4,
		user_id: 8,
		location_id: 10
	},
	{
		rating: 4,
		user_id: 2,
		location_id: 2
	},
	{
		rating: 3,
		user_id: 5,
		location_id: 9
	},
	{
		rating: 4,
		user_id: 3,
		location_id: 7
	},
	{
		rating: 5,
		user_id: 8,
		location_id: 7
	}
];

const seedRating = () => Rating.bulkCreate(ratingdata);

module.exports = seedRating;
