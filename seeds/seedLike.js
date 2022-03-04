const { Like } = require("../models");

const likedata = [
	{
		user_id: 8,
		location_id: 8
	},
	{
		user_id: 5,
		location_id: 5
	},
	{
		user_id: 1,
		location_id: 6
	},
	{
		user_id: 4,
		location_id: 5
	},
	{
		user_id: 3,
		location_id: 7
	},
	{
		user_id: 1,
		location_id: 2
	},
	{
		user_id: 9,
		location_id: 2
	},
	{
		user_id: 6,
		location_id: 10
	},
	{
		user_id: 5,
		location_id: 9
	},
	{
		user_id: 1,
		location_id: 7
	}
];

const seedLike = () => Like.bulkCreate(likedata);

module.exports = seedLike;
