const express = require("express");

const router = express.Router();

//home page
router.get("/", (req, res) => {
  res.render("main");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/Forget_password", (req, res) => {
  res.render("Forget_password");
});

//dashboard page
router.get("/dashboard", (req, res) => {
  res.send("Dashboard");
});

module.exports = router;