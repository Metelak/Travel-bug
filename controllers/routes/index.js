const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const travelRoutes = require("./travel-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/travels", travelRoutes);

module.exports = router;
