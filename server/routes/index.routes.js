const router = require("express").Router();

const topicRoutes = require("./api/topic.routes");
const askRoutes = require("./api/ask.routes");

router.use("/topics", topicRoutes);
router.use("/asks", askRoutes);

module.exports = router;