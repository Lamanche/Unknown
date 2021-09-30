const express = require("express");
const router = express.Router();
const checkAuth = require('./middleware/auth')

router.get("/andres", checkAuth, (req, res) => {
  res.send("Hello, i'm Andres");
});

module.exports = router;
