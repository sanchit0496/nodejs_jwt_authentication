const express = require('express');
const router = express.Router();
const likesController = require('../controllers/likesController');
const { createLikeSchema } = require('../validations/likesValidation');

// Create a new like
router.post('/', likesController.createLike);

// Get like by ID
router.get('/:id', likesController.getLikeById);

// Update like by ID
router.put('/:id', likesController.updateLike);

// Delete like by ID
router.delete('/:id', likesController.deleteLike);

// Get all like entries
router.get('/', likesController.getAllLikes);

module.exports = router;
