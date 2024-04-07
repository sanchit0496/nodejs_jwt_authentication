const Joi = require("joi");

// Validation for creating a new user
const createUserSchema = Joi.object({
    userId: Joi.string().guid({ version: ['uuidv4'] }).required(),
    username: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().allow('', null),
    displayPicture: Joi.string().allow('', null)
    // Add other fields as necessary
});

// Validation for creating a new progress entry
const createProgressSchema = Joi.object({
    userId: Joi.string().guid({ version: ['uuidv4'] }).required(),
    chapterUUID: Joi.string().guid({ version: ['uuidv4'] }).required()
    // Add other fields as necessary
});

module.exports = {
    createUserSchema,
    createProgressSchema,
};
