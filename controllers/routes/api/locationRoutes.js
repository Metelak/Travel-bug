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

router.post("/", (req, res) => {
	Location.create({
		title: req.body.title,
		text: req.body.text,
		user_id: req.body.user_id
	})
		.then((dbLoctaionData) => {
			res.json(dbLoctaionData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

router.put("/:id", (req, res) => {
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
module.exports = router;
