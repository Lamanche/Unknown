const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  firebase_uid: String,
});

module.exports = mongoose.model("User", UserSchema);
