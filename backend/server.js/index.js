const mongoose = require("mongoose");
const express = require("express");
const app = express();
const router = express.Router();
const port = 3002;
// const users = require("./models/");
// const users = "../models/users";
var uri = "mongodb://localhost:3002/users";
mongoose.connect(uri, { useUnifiedTopology: true, useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", function () {
  console.log("MongoDB database connection established successfully");
});
app.use("/", router);
// router.route("/add_user").post(function (req, res) {});

// users.insy(function (err, result) {
//   if (err) {
//     res.send(err);
//   } else {
//     res.send(result);
//   }
// });
app.listen(port, function () {
  console.log("Server is running on Port: " + port);
});
