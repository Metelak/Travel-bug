const router = require("express").Router();
const { Location, User, Comment, Rating } = require("../../../models");

router.get("/", (req, res) => {
	Location.findAll({
		include: [
			{
				model: User,
				attributes: ["id", "username", "email"]
			},
			{
				model: Rating,
				attributes: ["id", "rating", "user_id"]
			},
			{
				model: Comment,
				attributes: ["id", "comment_text", "user_id"]
			}
		]
	})
		.then((dbLoctaionData) => {
			res.json(dbLoctaionData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
	Location.findOne({
		where: {
			id: req.params.id
		},
		include: [
			{
				model: User,
				attributes: ["id", "username", "email"]
			},
			{
				model: Rating,
				attributes: ["id", "rating", "user_id"]
			},
			{
				model: Comment,
				attributes: ["id", "comment_text", "user_id"]
			}
		]
	})
		.then((dbLoctaionData) => {
			if (!dbLoctaionData) {
				res.status(404).json({ message: "No location found with this id" });
			}
			res.json(dbLoctaionData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});
module.exports = router;
