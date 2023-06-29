var express = require("express");
var router = express.Router();

const messages = [
  {
    text: "Hello There",
    user: "Jason",
    added: new Date(),
  },
  {
    text: "Hey World",
    user: "Josh",
    added: new Date(),
  },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

module.exports = router;
