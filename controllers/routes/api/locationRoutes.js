const router = require("express").Router();
const { Location, User, Comment, Rating, Like } = require("../../../models");
const withAuth = require("../../../utils/auth");
const getPicture = require("../../../utils/location-pictures");

router.get("/", (req, res) => {
	Location.findAll({
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
			},
			{
				model: Like,
				attributes: ["id", "user_id", "location_id"],
				include: {
					model: User,
					attributes: ["username", "email"]
				}
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
			},
			{
				model: Like,
				attributes: ["id", "user_id", "location_id"],
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
			}
			res.json(dbLoctaionData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.post("/", withAuth, async (req, res) => {
	const findPicture = await getPicture(req.body.title);
	if (findPicture) {
		Location.create({
			title: req.body.title,
			text: req.body.text,
			picture: findPicture,
			user_id: req.session.user_id
		})
			.then((dbLoctaionData) => {
				res.json(dbLoctaionData);
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	} else {
		Location.create({
			title: req.body.title,
			text: req.body.text,
			user_id: req.session.user_id
		})
			.then((dbLoctaionData) => {
				res.json(dbLoctaionData);
			})
			.catch((err) => {
				res.status(500).json(err);
			});
	}
});

router.put("/ulike", withAuth, (req, res) => {
	// custom static method created in models/Location.js
	Location.ulike({ ...req.body, user_id: req.session.user_id }, { Like, Comment, User })
		.then(updatedLikeData => res.json(updatedLikeData))
		.catch(err => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.put("/:id", withAuth, async (req, res) => {
	const findPicture = await getPicture(req.body.title);
	// if (req.body.title) {
	// 	const newPic = await getPicture(title);
	// 	req.body.picture = newPic;
	// }
	Location.update(
		{
			title: req.body.title,
			text: req.body.text,
			picture: findPicture
		},
		{
			where: {
				id: req.params.id
			}
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

router.delete("/:id", withAuth, (req, res) => {
	Location.destroy({
		where: {
			id: req.params.id
		}
	})
		.then((dbLoctaionData) => {
			res.json(dbLoctaionData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});
module.exports = router;