//Static file middleware

const express = require("express");

const app = express();

app.use(express.static("./views"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("index");
});

app.listen(6500);
console.log("this workng middlerware");
