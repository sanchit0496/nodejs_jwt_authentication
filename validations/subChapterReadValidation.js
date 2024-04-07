const Joi = require("joi");

const createSubchapterReadSchema = Joi.object({
    progressId: Joi.number().integer().required(),
    subchapterId: Joi.string().guid({ version: ['uuidv4'] }).required()
    // Add other fields as necessary
});

module.exports = {
    createSubchapterReadSchema,
};
