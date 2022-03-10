const router = require("express").Router();
const sequelize = require("../../config/connection");
const { Location, User, Comment, Rating } = require("../../models");


router.get("/", (req, res) => {
	console.log("=========================");
	Location.findAll({
		attributes: [
			"id",
			"picture",
			"title",
			"created_at",
			[
				sequelize.literal(
					"(SELECT COUNT(*) FROM rating WHERE location_id = rating.location_id)"
				),
				"location_count"
			]
		],
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
				attributes: [
					"id",
					"comment_text",
					"location_id",
					"user_id",
					"created_at"
				],
				include: {
					model: User,
					attributes: ["username", "email"]
				}
			}
		]
	})
		.then((dbLocationData) => {
			const locations = dbLocationData.map((location) =>
				location.get({ plain: true })
			);

			res.render("homepage", {
				locations,
				loggedIn: req.session.loggedIn
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
		attributes: [
			"id",
			"picture",
			"title",
			"created_at",
			[
				sequelize.literal(
					"(SELECT COUNT(*) FROM rating WHERE location_id = rating.location_id)"
				),
				"location_count"
			]
		],
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
				attributes: [
					"id",
					"comment_text",
					"location_id",
					"user_id",
					"created_at"
				],
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

			const location = dbLoctaionData.get({ plain: true });

			res.render("single-location", {
				location,
				loggedIn: req.session.loggedIn
			});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get("/login", (req, res) => {
	if (req.session.loggedIn) {
		res.redirect("/");
		return;
	}
	res.render("login");
});

module.exports = router;
