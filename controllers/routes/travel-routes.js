const router = require("express").Router();
// const sequelize = require("../config/connection");
const { Location, User, Comment, Rating } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
	console.log(req.session);
	console.log("================");
	Location.findAll({
		where:{
			user_id: req.session.user_id
		},
		attributes: [
			"id",
			"post_url",
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
				attributes: ["id", "comment_text", "user_id"],
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
			// .then(dbLocationData => {
			// 	// serialize data before passing to template
			// 	const locations = dbLocationData.map(location => location.get({ plain: true }));
			// 	res.render('travels', { posts, loggedIn: true });
			//   })

			res.render("travels", {
				locations,
				loggedIn: req.session.loggedIn
			});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get("/edit/:id", withAuth, (req, res) => {
	Location.findByPk(req.params.id, {
		attributes: [
			"id",
			"post_url",
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
				attributes: ["id", "comment_text", "location_id", "user_id", "created_at"],
				include: {
					model: User,
					attributes: ["username", "email"]
				}
			}
		]
	})
		.then((dbLoctaionData) => {
			if (dbLoctaionData) {
				const location = dbLoctaionData.get({ plain: true });

				res.render("edit-location", {
					location,
					loggedIn: req.session.loggedIn
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
