//Start with express

const express = require("express");

const app = express();

app.get("/", function (req, res) {
  res.send("<h1>hello world</h1>");
  res.end();
});

app.listen(9000);
console.log("server is running bhai");
