"use strict";

var express = require("express");

var router = express.Router();

var userData = require('../data.json'); // =========================================================


router.get("/", function (req, res) {
  res.render("home", {
    title: "Home",
    data: userData
  });
});
router.get("/about", function (req, res) {
  res.render("about", {
    title: "About",
    data: userData
  });
});
router.get("/hobbies", function (req, res) {
  res.render("hobbies", {
    title: "Hobbies",
    data: userData
  });
});
router.get("/contact", function (req, res) {
  res.render("contact", {
    title: "Contact",
    data: userData
  });
});
router.get("/gaming", function (req, res) {
  res.render("gaming", {
    title: "Gaming",
    data: userData
  });
});
router.get("/books", function (req, res) {
  res.render("books", {
    title: "Books",
    data: userData
  });
});
router.get("/photography", function (req, res) {
  res.render("photography", {
    title: "photography",
    data: userData
  });
});
router.get("/addItems", function (req, res) {
  res.render("addItems", {
    title: "addItems",
    data: userData
  });
}); // =========================================================

router.get("*", function (req, res) {
  res.render("404");
});
module.exports = router;