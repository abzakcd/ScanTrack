const express = require('express');
const router = express.Router();
const authService = require('../services/userService');

// Register route
router.post('/register', authService.registerUser);

// Login route
router.post('/login', authService.loginUser);

module.exports = router;
