const express = require("express");
const router = express.Router();
const checkAuth = require("./middleware/auth");
const UserModel = require("../db/models/User");

router.get("/andres", checkAuth, (req, res) => {
  res.send("Hello, i'm Andres");
});

router.post("/register", checkAuth, async (req, res) => {
  const user = await new UserModel({
    name: "Andres",
    email: "emailblabla",
    firebase_uid: "token id",
  });
  try {
    await user.save();
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
