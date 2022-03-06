const router = require("express").Router();
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

			res.render("travels", {
				locations
			});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get("/edit/:id", (req, res) => {
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
			if (dbLoctaionData) {
				const location =dbLoctaionData.get({ plain: true});

				res.render("edit-location",{
					location
				});
			} else {
				res.status(404).end();
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});


module.exports = router;
