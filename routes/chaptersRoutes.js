const express = require('express');
const router = express.Router();
const chaptersController = require('../controllers/chaptersController');
const { createChapterSchema } = require('../validations/chaptersValidation');

// Create a new chapter
router.post('/', chaptersController.createChapter);

// Get chapter by ID
router.get('/:id', chaptersController.getChapterById);

// Update chapter by ID
router.put('/:id', chaptersController.updateChapter);

// Delete chapter by ID
router.delete('/:id', chaptersController.deleteChapter);

// Get all chapter entries
router.get('/', chaptersController.getAllChapters);

module.exports = router;
