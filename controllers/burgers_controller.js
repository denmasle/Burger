var express = require("express");
var router = express.Router();
var burgers = require("../models/burger.js");

//create routes
router.get("/", function(req, res) {
  burgers.selectAll(function(data) {
    var hbsObj = {
      burgers: data
    };
    console.log(hbsObj);
    res.render("index", hbsObj);
  });
});

router.post("/", function(req, res) {
  burgers.insertOne(req.body.name, function() {
    res.redirect("/");
  });
});

router.put("/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  burgers.updateOne(req.params.id, function() {
    res.redirect("/");
  });
});

module.exports = router;