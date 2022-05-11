"use strict";

if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}

var express = require("express");

var bodyParser = require("body-parser");

var indexRouter = require("./router/index.js");

var expressLayouts = require("express-ejs-layouts");

var app = express();

var fs = require('fs');

var port = process.env.PORT;
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.set("router");
app.use(expressLayouts);
app.use(express["static"]("public"));
app.use("/", indexRouter);
app.use(bodyParser.urlencoded({
  extended: true
}));
var data = fs.readFileSync('data.json');
var userData = JSON.parse(data);
app.post("/addItems", function (req, res) {
  var name = req.body.name;
  var file = "/img/Gaming/" + req.body.file;
  var rating = req.body.rating;
  var description = req.body.description;
  var newObject = {
    "name": name,
    "image": file,
    "rating": rating,
    "description": description
  };
  userData.gaming.push(newObject);
  userData = JSON.stringify(userData);
  fs.writeFile('data.json', userData, function (err) {
    console.log("New data added");
  });
  res.render("./submission", {
    title: "Subbmited"
  });
});
app.post("/addBooks", function (req, res) {
  var name = req.body.Bname;
  var file = "/img/BooksCovers/" + req.body.Bfile;
  var rating = req.body.Brating;
  var description = req.body.Bdescription;
  var newObject = {
    "name": name,
    "image": file,
    "rating": rating,
    "description": description
  };
  userData.books.push(newObject);
  userData = JSON.stringify(userData);
  fs.writeFile('data.json', userData, function (err) {
    console.log("New data added");
  });
  res.render("./submission", {
    title: "Subbmited"
  });
});
app.post("/addPics", function (req, res) {
  var name = req.body.Pname;
  var file = "/img/photography/" + req.body.Pfile;
  var rating = req.body.Prating;
  var description = req.body.Pdescription;
  var newObject = {
    "name": name,
    "image": file,
    "rating": rating,
    "description": description
  };
  userData.photography.push(newObject);
  userData = JSON.stringify(userData);
  fs.writeFile('data.json', userData, function (err) {
    console.log("New data added");
  });
  res.render("./submission", {
    title: "Subbmited"
  });
});
app.post("/toremove", function (req, res) {
  var toRemove = req.body.toRemove;

  for (var index = 0; index < toRemove.length; index++) {
    delete userData.gaming[toRemove[index]];
  }

  userData = JSON.stringify(userData);
  userData = userData.split(",null").join("");
  userData = userData.split("null,").join("");
  userData = userData.split("null").join("");
  fs.writeFile('data.json', userData, function (err) {
    console.log("Data removed");
  });
  res.render("./submission", {
    title: "removed"
  });
});
app.post("/toremoveB", function (req, res) {
  var toRemove = req.body.toRemoveB;

  for (var index = 0; index < toRemove.length; index++) {
    delete userData.books[toRemove[index]];
  }

  userData = JSON.stringify(userData);
  userData = userData.split(",null").join("");
  userData = userData.split("null,").join("");
  userData = userData.split("null").join("");
  fs.writeFile('data.json', userData, function (err) {
    console.log("Data removed");
  });
  res.render("./submission", {
    title: "removed"
  });
});
app.post("/toremoveP", function (req, res) {
  var toRemove = req.body.toRemoveP;

  for (var index = 0; index < toRemove.length; index++) {
    delete userData.photography[toRemove[index]];
  }

  userData = JSON.stringify(userData);
  userData = userData.split(",null").join("");
  userData = userData.split("null,").join("");
  userData = userData.split("null").join("");
  fs.writeFile('data.json', userData, function (err) {
    console.log("Data removed");
  });
  res.render("./submission", {
    title: "removed"
  });
});
app.listen(port, function () {
  console.log("Server started at port " + port);
});