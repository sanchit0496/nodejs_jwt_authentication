const express = require('express');
const authController = require('../controllers/authController');
const router = express.Router();

// Authentication routes
router.post('/login', authController.login);
router.post('/token', authController.refreshToken);
router.delete('/logout', authController.logout);

module.exports = router;
