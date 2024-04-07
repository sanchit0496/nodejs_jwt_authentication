const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController');
const { createNotesSchema } = require('../validations/notesValidation');

// Create a new notes
router.post('/', notesController.createNotes);

// Get notes by ID
router.get('/:id', notesController.getNotesById);

// Update notes by ID
router.put('/:id', notesController.updateNotes);

// Delete notes by ID
router.delete('/:id', notesController.deleteNotes);

// Get all notes entries
router.get('/', notesController.getAllNotes);

module.exports = router;
