const router = require("express").Router();
const { Location, User, Rating, Like } = require("../../../models");

// Get the user's likes by user_id
router.get("/:id", (req, res) => {
	Like.findAll({
		// find likes by user_id
		where: {
			user_id: req.params.id
		},
		include: [
			{
				model: User,
				attributes: ["id", "username", "email"]
			},
			{
				model: Location,
				attributes: ["id", "title", "text"],
				include: [
					{
						model: User,
						attributes: ["username", "email"]
					},
					{
						model: Rating,
						attributes: ["id", "rating", "user_id", "location_id"]
					}
				]
			}
		]
	})
		.then((dbLikeData) => {
			if (!dbLikeData) {
				res.status(404).json({ message: "No user found with this id" });
			}
			res.json(dbLikeData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

// add user like
router.post("/", (req, res) => {
	Like.create({
		// !replace this user_id with the user's session
		user_id: req.body.user_id,
		location_id: req.body.location_id
	})
		.then((dbLikeData) => {
			res.json(dbLikeData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// edit like
router.put("/:id", (req, res) => {
	Like.update(req.body, {
		where: {
			id: req.params.id
		}
	})
		.then((dbLikeData) => {
			if (!dbLikeData) {
				res.status(404).json({ message: "No user found with this id" });
			}
			res.json(dbLikeData);
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

// delete like
router.delete("/:id", (req, res) => {
	Like.destroy({
		where: {
			id: req.params.id
		}
	})
		.then((dbLikeData) => {
			if (!dbLikeData) {
				res.status(404).json({ message: "No user found with this id" });
			}
		})
		.catch((err) => {
			res.status(500).json(err);
		});
});

module.exports = router;
