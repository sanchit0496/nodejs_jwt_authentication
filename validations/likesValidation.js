const Joi = require("joi");

const createLikeSchema = Joi.object({
    userId: Joi.string().guid({ version: ['uuidv4'] }).required(),
    chapterId: Joi.string().guid({ version: ['uuidv4'] }).required(),
    subchapterId: Joi.string().guid({ version: ['uuidv4'] }).required()
    // Add other fields as necessary
});

module.exports = {
    createLikeSchema,
};
