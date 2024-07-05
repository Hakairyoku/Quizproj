const router = require("express").Router();
const { Ask } = require("../../db/models");
router.get("/", async (req, res) => {
  try {
    const asks = await Ask.findAll();
    res.status(200).json({ message: "success", asks });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const ask = await Ask.findByPk(+id);
    res.status(200).json({ message: "success", ask });
  } catch ({ message }) {
    res.status(500).json({ error: message });
  }
});
module.exports = router;
