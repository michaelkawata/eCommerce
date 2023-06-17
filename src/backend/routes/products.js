const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET request for list of all products.
router.get('/', productController.getAllProducts);

// GET request for one product.
router.get('/:id', productController.getProductById);

// POST request for creating a product.
router.post('/', productController.createProduct);

// PUT request to update a product.
router.put('/:id', productController.updateProduct);

// DELETE request to delete a product.
router.delete('/:id', productController.deleteProduct);

module.exports = router;