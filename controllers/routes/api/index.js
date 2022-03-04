const router = require("express").Router();

const commentRoutes = require("./commentRoutes");
const locationRoutes = require("./locationRoutes");
const userRoutes = require("./userRoutes");

router.use("/users", userRoutes);
router.use("/locations", locationRoutes);
router.use("/comments", commentRoutes);

module.exports = router;
