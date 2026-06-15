const express = require("express");

const {
  registerUser,
  loginUser,
  resetPassword
} = require("../controllers/authController");

const router = express.Router();

// =====================
// REGISTER USER
// =====================

router.post("/register", registerUser);

// =====================
// LOGIN USER
// =====================

router.post("/login", loginUser);

// =====================
// RESET PASSWORD
// =====================

router.put("/reset-password", resetPassword);

module.exports = router;