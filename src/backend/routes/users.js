const router = require("express").Router();
const userController = require("../controllers/userController");
const {
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require("../controllers/tokenController");

// Update User
router.put("/:id", verifyTokenAndAuthorization, userController.updateUser);

// Delete User
router.delete("/:id", verifyTokenAndAuthorization, userController.deleteUser);

// Get User
router.get("/find/:id", verifyTokenAndAdmin, userController.findUser);

// Get All Users
router.get("/", verifyTokenAndAdmin, userController.getAllUsers);

// Register User
router.post("/register", userController.registerUser);

module.exports = router;
