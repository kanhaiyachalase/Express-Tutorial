// create Dymanic HTML page using pug template engine
//we need to crete views name folder
//and we theire our all files

const express = require("express");
const app = express();

app.set("view engine", "ejs"); // we need to declare or define the views folder

// app.set("views", "./views"); // we `nedd to declare the path of file or folder here

app.get("/", function (req, res) {
  res.render("pagess");
});

app.listen(2000);
console.log(" Hello students");
