const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// POST request for registering a user.
router.post('/register', userController.user_register);

// POST request for user login.
router.post('/login', userController.user_login);

// GET request for one user.
router.get('/:id', userController.user_detail);

// PUT request to update a user.
router.put('/:id', userController.user_update);

// DELETE request to delete a user.
router.delete('/:id', userController.user_delete);

module.exports = router;
