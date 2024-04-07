const express = require('express');
const router = express.Router();
const subchaptersController = require('../controllers/subchaptersController');
const { createSubchapterSchema } = require('../validations/subchaptersValidation');

// Create a new subchapter
router.post('/', subchaptersController.createSubchapter);

// Get subchapter by ID
router.get('/:id', subchaptersController.getSubchapterById);

// Update subchapter by ID
router.put('/:id', subchaptersController.updateSubchapter);

// Delete subchapter by ID
router.delete('/:id', subchaptersController.deleteSubchapter);

// Get all subchapter entries
router.get('/', subchaptersController.getAllSubchapters);

module.exports = router;
