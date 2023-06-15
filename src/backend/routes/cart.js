const router = require("express").Router();  // Importing Express router for creating route handlers
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require("./verifyToken");  // Importing middleware for verifying JWT tokens and permissions

// Importing the cart controller
const cartController = require("../controllers/cartController");

// Route for creating a new cart. Only accessible if the user is authenticated (verified by the token)
router.post("/", verifyToken, cartController.createCart);

// Route for updating an existing cart. Accessible only by the cart owner or an admin
router.put("/:id", verifyTokenAndAuthorization, cartController.updateCart);

// Route for deleting an existing cart. Accessible only by the cart owner or an admin
router.delete("/:id", verifyTokenAndAuthorization, cartController.deleteCart);

// Route for getting a specific user's cart. Accessible only by the cart owner or an admin
router.get("/find/:userId", verifyTokenAndAuthorization, cartController.getUserCart);

// Route for getting all carts. Only accessible by an admin
router.get("/", verifyTokenAndAdmin, cartController.getAllCarts);


module.exports = router;
