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

router.get("/new", function (req, res, next) {
  res.render("form", { title: "test" });
});

router.post("/new", (req, res) => {
  messages.push({
    text: req.body.message,
    user: req.body.author,
    added: new Date(),
  });
  res.redirect("/");
});

module.exports = router;
