const router = require("express").Router();
const authController = require("../controllers/authController")

// Route for registering a new user, handled by the register method of authController
router.post("/register", authController.register)

// Route for logging in a user, handled by the login method of authController
router.post("/login", authController.login)

module.exports = router
