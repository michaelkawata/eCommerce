const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET request for list of all products.
router.get('/', productController.product_list);

// GET request for one product.
router.get('/:id', productController.product_detail);

// POST request for creating a product.
router.post('/', productController.product_create);

// PUT request to update a product.
router.put('/:id', productController.product_update);

// DELETE request to delete a product.
router.delete('/:id', productController.product_delete);

module.exports = router;
