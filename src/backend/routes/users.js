const router = require("express").Router();
const userController = require("../controllers/userController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require("./verifyToken")

// Update User
router.put("/:id", verifyTokenAndAuthorization, userController.updateUser)

// Delete User
router.delete("/:id", verifyTokenAndAuthorization, userController.deleteUser)

// Get User
router.get("/find/:id", verifyTokenAndAdmin, userController.findUser)

// Get All Users
router.get("/", verifyTokenAndAdmin, userController.getAllUsers)

// Get User Stats
router.get("/stats", verifyTokenAndAdmin, userController.getUserStats)

module.exports = router
