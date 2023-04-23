//How to use cookies in express
//Download cookies parser first in project
//npm i cookie-parse

//note cookies is not good you can also use session this is similar as cookies and it is very usefull

const express = require("express");

const app = express();

const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");

//Set ejs
app.set("view engine", "ejs");

//set bodyparser
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

//cookies setup
app.use();

app.get("/", function (req, res) {
  res.send("this is running");
});

app.listen(9500);
console.log("this is running o  the port 9500");
