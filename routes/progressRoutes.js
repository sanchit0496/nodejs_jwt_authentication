const express = require('express');
const router = express.Router();
const progressController = require('../controllers/progressController');
const { createProgressSchema } = require('../validations/progressValidation');

// Create a new progress
router.post('/', progressController.createProgress);

// Get progress by ID
router.get('/:id', progressController.getProgressById);

// Update progress by ID
router.put('/:id', progressController.updateProgress);

// Delete progress by ID
router.delete('/:id', progressController.deleteProgress);

// Get all progress entries
router.get('/', progressController.getAllProgress);

module.exports = router;
