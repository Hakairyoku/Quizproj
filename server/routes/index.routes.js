const router = require("express").Router();

const topicRoutes = require("./api/topics.routes");
const askRoutes = require("./api/asks.routes");

router.use("/topics", topicRoutes);
router.use("/asks", askRoutes);

module.exports = router;