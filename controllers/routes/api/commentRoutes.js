const router = require("express").Router();
// const sequelize = require('../../config/connection');
const { Comment, User } = require("../../../models");

//GET all comments
router.get("/", (req, res) => {
	// find all comments
	//including associated Users
	Comment.findAll({
		include: {
			model: User,
			attributes: ["id", "username", "email", "", ""]
		}
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

//GET a single comment
router.get("/:id", (req, res) => {
	Comment.findOne({
		where: {
			id: req.params.id
		},
		include: {
			model: User,
			attributes: ["id", "", "", "", ""]
		}
	}).then((dbCommentData) => {
		if (!dbCommentData) {
			res.status(404).json({ message: "Cannot find comment by ID" });
			return;
		}
		res.status(500).json(err);
	});
});

router.post("/", (req, res) => {
	//create a new comment
	Comment.create({
		comment_name: req.body.comment_name
	})
		.then((dbCommentData) => res.json(dbCommentData))
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

router.put("/:id", (req, res) => {
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

router.delete("/:id", (req, res) => {
	//delete a comment by its 'id' value
	Comment.destroy({
		where: {
			id: req.params.id
		}
	})
		.then((dbCommentData) => {
			if (!dbCommentData) {
				res.status(404).json({ message: "Comment ID not found" });
				return;
			}
			res.json(dbCommentData);
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json(err);
		});
});

module.exports = router;
