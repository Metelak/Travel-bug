const router = require("express").Router();

const commentRoutes = require("./commentRoutes");
const locationRoutes = require("./locationRoutes");
const userRoutes = require("./userRoutes");
const ratingRoutes = require("./ratingRoutes");
const likeRoutes = require("./likeRoutes");
const locationPicture = require("./location-picture");

router.use("/users", userRoutes);
router.use("/locations", locationRoutes);
router.use("/comments", commentRoutes);
router.use("/ratings", ratingRoutes);
router.use("/likes", likeRoutes);
router.use("/location-picture", locationPicture);

module.exports = router;
