const express = require('express');
const router = express.Router();
const subchapterReadController = require('../controllers/subchapterReadController');
const { createSubchapterReadSchema } = require('../validations/subchapterReadValidation');

// Create a new subchapterRead
router.post('/', subchapterReadController.createSubchapterRead);

// Get subchapterRead by ID
router.get('/:id', subchapterReadController.getSubchapterReadById);

// Update subchapterRead by ID
router.put('/:id', subchapterReadController.updateSubchapterRead);

// Delete subchapterRead by ID
router.delete('/:id', subchapterReadController.deleteSubchapterRead);

// Get all subchapterRead entries
router.get('/', subchapterReadController.getAllSubchapterRead);

module.exports = router;
