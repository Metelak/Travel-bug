const router = require("express").Router();
// const sequelize = require('../config/connection');
const { Location, User, Comment, Rating } = require("../../models");

router.get("/", (req, res) => {
	Location.findAll({
		include: [
			{
				model: User,
				attributes: ["id", "username", "email"]
			},
			{
				model: Rating,
				attributes: [
					"id",
					"rating",
					"user_id",
				],
				include: {
					model: User,
					attributes: ["username", "email"]
				}
			},
			{
				model: Comment,
				attributes: ["id", "comment_text", "user_id"],
				include: {
					model: User,
					attributes: ["username", "email"]
				}
			}
		]
	})
		.then((dbLocationData) => {
			const locations = dbLocationData.map(location => location.get({ plain: true}));

			res.render("homepage", {
				locations
			});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get("/location/:id", (req, res) => {
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
				attributes: ["id", "rating", "user_id"],
				include: {
					model: User,
					attributes: ["username", "email"]
				}
			},
			{
				model: Comment,
				attributes: ["id", "comment_text", "user_id"],
				include: {
					model: User,
					attributes: ["username", "email"]
				}
			}
		]
	})
		.then((dbLoctaionData) => {
			if (!dbLoctaionData) {
				res.status(404).json({ message: "No location found with this id" });
				return;
			}

			const location = dbLoctaionData.get({ plain: true});

			res.render("single-location", {
				location
			});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get("/login", (req, res) => {
	res.render("login");
});

module.exports = router;
