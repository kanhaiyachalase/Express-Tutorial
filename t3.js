// create and use the routing

const express = require("express");

const app = express();

const router = express.Router();

router.get("", function (req, res) {
  var out = `<h1>kanhaiya chalase</h1>`;
  out += `<a href = "/course"></a>`;
  res.send(out);
});

app.use("/course", course);

module.exports = router;
console.log("Hello bhai");
