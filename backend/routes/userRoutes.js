const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// Register route
router.post('/register', userService.registerUser);

// Login route
router.post('/login', userService.loginUser);

module.exports = router;
