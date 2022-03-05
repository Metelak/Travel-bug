const router = require("express").Router();
const { Comment, User, Location, Rating } = require("../../../models");

router.get("/", (req, res) => {
	Rating.findAll({
		include: [
			{
				model: User,
				attributes: ["id", "username", "email"]
			},
			{
				model: Location,
				attributes: ["id", "title", "text", "user_id"],
				include: {
					model: User,
					attributes: ["username", "email"]
				}
			}
		]
	});
});
