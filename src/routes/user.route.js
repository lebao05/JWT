const express = require("express");
const router = express.Router();

router.post("/register", (req, res) => {
  res.send("register");
});

router.post("/refresh-token", (req, res) => {
  res.send("refresh-token");
});

router.post("/logout", (req, res) => {
  res.send("Logout");
});

router.post("/login", (req, res) => {
  res.send("login");
});

module.exports = router;
