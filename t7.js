//Body parser in express
//In order to get access to the post data we have to use body-parser.
// Basically what the body-parser is which allows express to read the body and then parse that into a Json object that we can understand. It parses the HTTP request body.
//install npm body parser
const express = require("express");

const app = express();

const bodyparser = require("body-parser");

app.set("view engine", "ejs");
app.use("views", "./views");

//urlEncoded data parsing
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.render("index");
  res.end();
});

app.listen(7000);
console.log("bosy parser is rrunnning");
