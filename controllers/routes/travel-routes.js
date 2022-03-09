const router = require("express").Router();
// const sequelize = require("../config/connection");
const { Location, User, Comment, Rating } = require("../../models");
const withAuth = require("../../utils/auth");

router.get("/", withAuth, (req, res) => {
	Location.findAll({
		where:{
			user_id: req.session.user_id
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
				//loggedIn: true
			});
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.get("/edit/:id", withAuth, (req, res) => {
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
				const location = dbLoctaionData.get({ plain: true });

				res.render("edit-location", {
					location,
					//loggedIn: true
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
