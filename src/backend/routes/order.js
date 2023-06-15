// Import required modules
const router = require("express").Router();  // Express router for defining routes
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin
} = require("./verifyToken");  // Middleware to check JWT token and user permissions

const orderController = require("../controllers/orderController");  // Controller methods for order related operations

// Route for creating a new order
router.post("/", verifyTokenAndAdmin, orderController.createOrder);

// Route for updating an existing order
router.put("/:id", verifyTokenAndAdmin, orderController.updateOrder);

// Route for deleting an existing order
router.delete("/:id", verifyTokenAndAdmin, orderController.deleteOrder);

// Route for getting orders of a specific user
router.get("/find/:userId", verifyTokenAndAuthorization, orderController.getUserOrders);

// Route for getting all orders
router.get("/", verifyTokenAndAdmin, orderController.getAllOrders);

// Exporting the router to be used in other parts of the application
module.exports = router;
