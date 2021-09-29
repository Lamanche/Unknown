const express = require("express");
const router = express.Router();

router.get("/andres", (req, res) => {
  res.send("Hello, i'm Andres");
});

module.exports = router;
