const express = require("express");
const router = express.Router();
const { signup, login, getMe } = require("../controllers/auth");
const auth = require("../middleware/auth");

router.post("/signup", signup);

router.post("/login", login);

router.get("/about", auth, getMe);

module.exports = router;