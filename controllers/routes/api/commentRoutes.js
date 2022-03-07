const router = require("express").Router();
const { Comment, User, Location } = require("../../../models");
// const sequelize = require('../../config/connection');
const withAuth = require("../../../utils/auth");

//GET all comments
router.get("/", (req, res) => {
	// find all comments
	//including associated Users
	Comment.findAll({
		include: [
			{
				model: User,
				attributes: ["id", "username", "email"]
			},
			{
				model: Location,
				attributes: ["id", "title", "text", "user_id"]
			}
		]
	})
		.then((dbCommentData) => {
			if (!dbCommentData) {
				res.status(404).json({ message: "Cannot find comments" });
				return;
			}
			res.json(dbCommentData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.get("/:id", (req, res) => {
	Comment.findOne({
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
				attributes: ["id", "title", "text", "user_id"]
			}
		]
	})
		.then((dbUserData) => {
			if (!dbUserData) {
				res.status(404).json({ message: "No user found with this id" });
				return;
			}
			res.json(dbUserData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});
router.put("/:id", withAuth, (req, res) => {
	//update a comment by its 'id' value
	Comment.update(req.body, {
		where: {
			id: req.params.id
		}
	})
		.then((dbCommentData) => {
			if (!dbCommentData) {
				res.status(404).json({ message: "Comment not found with this ID" });
				return;
			}
			res.json(dbCommentData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.post("/", withAuth, (req, res) => {
	// expects => {comment_text: "This is the comment", user_id: 1, location_id: 2}
	if (req.session) {
		Comment.create({
			comment_text: req.body.comment_text,
			user_id: req.session.user_id,
			location_id: req.body.location_id
		})
			.then((dbCommentData) => res.json(dbCommentData))
			.catch((err) => {
				console.log(err);
				res.status(400).json(err);
			});
	}
});

router.delete("/:id", (req, res) => {
	if (req.session) {
		Comment.destroy({
			where: {
				id: req.params.id
			}
		})
			.then((dbCommentData) => {
				if (!dbCommentData) {
					res.status(404).json({ message: "No comment found with this id!" });
					return;
				}
				res.json(dbCommentData);
			})
			.catch((err) => {
				console.log(err);
				res.status(500).json(err);
			});
	}
});
module.exports = router;
