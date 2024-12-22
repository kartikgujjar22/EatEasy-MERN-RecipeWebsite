const express = require("express");
const {
  signupValidation,
  loginValidation,
} = require("../Middleware/Validation");
const { signup, login } = require("../Controller/AuthController");
const router = express.Router();

router.post("/login", loginValidation, login);
router.post("/signup", signupValidation, signup);

module.exports = router;
