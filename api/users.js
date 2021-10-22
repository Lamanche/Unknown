const express = require("express");
const router = express.Router();
const admin = require("firebase-admin");
const checkAuth = require("./middleware/auth");
const UserModel = require("../db/models/User");

router.get("/andres", checkAuth, (req, res) => {
  res.send("Hello, i'm Andres");
});

router.post("/register", checkAuth, async (req, res) => {
  const { token } = req.headers;
  const userData = await admin
    .auth()
    .verifyIdToken(token)
    .then((decodedToken) => {
      return decodedToken;
    });
  const user = await new UserModel({
    name: userData.name,
    email: userData.email,
    firebase_uid: userData.uid,
  });
  try {
    await user.save();
    res.send("User saved");
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
