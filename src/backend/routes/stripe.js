const router = require("express").Router();
const stripeController = require("../controllers/stripeController");

// Route for creating a payment, this is handled by the 'createPayment' method in stripeController
router.post("/payment", stripeController.createPayment);

module.exports = router;
