const router = require("express").Router();
const { Location, User, Comment, Rating } = require("../../../models");
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

router.post("/",withAuth, async (req, res) => {
	const findPicture = await getPicture(req.body.title);
	let picture = null;
	if (findPicture) {
		picture = findPicture;
	}

	Location.create({
		title: req.body.title,
		text: req.body.text,
		picture: picture,
		user_id: req.body.user_id
		// user_id: req.session.user_id
	})
		.then((dbLoctaionData) => {
			res.json(dbLoctaionData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.put("/:id", withAuth, (req, res) => {
	Location.update(req.body, {
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
