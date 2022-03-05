const router = require("express").Router();

const commentRoutes = require("./commentRoutes");
const locationRoutes = require("./locationRoutes");
const userRoutes = require("./userRoutes");
const ratingRoutes = require("./ratingRoutes");

router.use("/users", userRoutes);
router.use("/locations", locationRoutes);
router.use("/comments", commentRoutes);
router.use("/ratings", ratingRoutes);

module.exports = router;
