const express = require("express");
const app = express();
const port = 3002;

app.get("/users", async (req, res) => res.send(users));

app.post("/users", async (req, res) => {
  try {
    ("Hello World!");
    const { name, surname, dob, grade } = req.body;
    if (name === "" || surname === "" || dob === "" || grade === "") {
      return res.send(400);
    }
  } catch (err) {
    console.log(err);
    res.send(501);
  }
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
