const Cart = require("../models/Cart");

// Asynchronously creating a new cart
const createCart = async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    // Saving the new cart to the database and returning it in the response
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (err) {
    // Catching any error that might occur and returning it in the response
    res.status(500).json(err);
  }
};

// Asynchronously updating a specific cart
const updateCart = async (req, res) => {
  try {
    // Updating the cart in the database and returning the updated cart in the response
    const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
      $set: req.body,
    }, { new: true });
    res.status(200).json(updatedCart);
  } catch (err) {
    // Catching any error that might occur and returning it in the response
    res.status(500).json(err);
  }
};

// Asynchronously deleting a specific cart
const deleteCart = async (req, res) => {
  try {
    // Deleting the cart from the database
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart has been deleted...");
  } catch (err) {
    // Catching any error that might occur and returning it in the response
    res.status(500).json(err);
  }
};

// Asynchronously getting a user's cart
const getUserCart = async (req, res) => {
  try {
    // Finding the user's cart in the database and returning it in the response
    const cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(cart);
  } catch (err) {
    // Catching any error that might occur and returning it in the response
    res.status(500).json(err);
  }
};

// Asynchronously getting all carts
const getAllCarts = async (req, res) => {
  try {
    // Finding all carts in the database and returning them in the response
    const carts = await Cart.find();
    res.status(200).json(carts);
  } catch (err) {
    // Catching any error that might occur and returning it in the response
    res.status(500).json(err);
  }
};

// Exporting all controller functions for use in other parts of the application
module.exports = {
  createCart,
  updateCart,
  deleteCart,
  getUserCart,
  getAllCarts
};
