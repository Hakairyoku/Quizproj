const router = require("express").Router();
const { Asks } = require("../../db/models");
router.get("/", async (req, res) => {
  try {
    const asks = await Asks.findAll();
    res.status(200).json({ message: "success", asks });
  } catch ({ message }) {
    res.status(500).json({ erroe: message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    console.log("params", id);
    const ask = await Asks.findBiPk(+id);
    res.status(200).json({ message: "success", ask });
  } catch ({ message }) {
    res.status(500).json({ erroe: message });
  }
});
module.exports = router;
