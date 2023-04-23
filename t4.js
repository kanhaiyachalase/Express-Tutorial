//Middleware functions are the functions that access to the request and response object (req, res) in request-response cycle.

// A middleware function can perform the following tasks:

// It can execute any code.
// It can make changes to the request and the response objects.
// It can end the request-response cycle.
// It can call the next middleware function in the stack.

const express = require("express");
const app = express();

function logInfo(req, res, next) {
  console.log("hello from the loginfo...midddleware");
  next();
}

function addData(req, res, next) {
  var person = {
    name: "kanhaiya chalase",
    age: 45,
  };
  req.person = person;
  next();
}
app.use(addData);
app.use(logInfo);

app.get("/", function (req, res) {
  res.send("hello Middleware is working");
  res.end();
});

app.get("/person", function (req, res) {
  res.send("name: " + req.person.name + "  age :" + req.person.age);
  res.end();
});
app.listen(4500);
console.log("this middelware  is working ");
