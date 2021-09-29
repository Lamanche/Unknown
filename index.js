const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");

const users = require("./api/users.js");

require("dotenv").config();

app.use(cors());
//app.use(bodyParser.json());
//app.use(bodyParser.urlencoded({ extended: true }));

app.use("/users", users);

port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
