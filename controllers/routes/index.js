const router = require("express").Router();

const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const myLocationRoutes = require("./myLocation-routes.js");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/travels", myLocationRoutes);

module.exports = router;
