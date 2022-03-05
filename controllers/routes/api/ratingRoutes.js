const router = require("express").Router();
const { User, Location, Rating } = require("../../../models");

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
	})
		.then((dbRatingData) => {
			res.json(dbRatingData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
	Rating.findOne({
		where: {
			id: req.params.id
		},
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
	})
		.then((dbRatingData) => {
			if (!dbRatingData) {
				res.status(404).json({ message: "No rating found with this id" });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.post("/:id", (req, res) => {
	Rating.create({
		rating: req.body.rating,
		user_id: req.body.user_id,
		location_id: req.body.location_id
	})
		.then((dbRatingData) => {
			res.json(dbRatingData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});
