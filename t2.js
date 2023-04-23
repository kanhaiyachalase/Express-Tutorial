// Routing in expresss.js
// Routing refers to how an application’s endpoints (URIs) respond to client requests.
//Routing is nothing but we can provide in path or urls in express

const express = require("express");

const app = express();

//Get method
// In case of Get request, only limited amount of data can be sent because data is sent in header.
//Get request is not secured because data is exposed in URL bar.
app.get("/", function (req, res) {
  res.send("hello from the routing");
  res.end();
});
app.get("/home", function (req, res) {
  res.send("hello from the home");
  res.end();
});

//Post method
//In case of post request, large amount of data can be sent because data is sent in body.
//Post request is secured because data is not exposed in URL bar.
app.post("/about", function (req, res) {
  res.send("Hello from about");
  res.end();
});

app.listen(4000);
console.log("Routing is working");
