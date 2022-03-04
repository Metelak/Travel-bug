const router = require("express").Router();

router.use(require("./commentRoutes"));
router.use(require("./locationRoutes"));
router.use(require("./userRoutes"));

module.exports = router;
