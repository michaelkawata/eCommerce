const router = require("express").Router();
const tokenController = require("../controllers/tokenController");
const jwt = require('jsonwebtoken');

// Verify Token
router.use(tokenController.verifyToken)

// Verify Token and Authorization
router.use(tokenController.verifyTokenAndAuthorization)

// Verify Token and Admin Authorization
router.use(tokenController.verifyTokenAndAdmin)

module.exports = router
