const router = require("express").Router();
const { Comment } = require("../../../models");

router.get("/", (req, res) => {
	Comment.findAll()
		.then((dbCommentData) => res.json(dbCommentData))
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
