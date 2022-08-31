const express = require("express");
const { registerUser, logIn, getProfile } = require("../controllers/user.controller");


const router = express.Router();

/* ########     post requests   ######## */
router.post("/register", registerUser);
router.post("/login", logIn);
router.post('/profile', getProfile);


module.exports = router;