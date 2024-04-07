const Joi = require("joi");

const createNotesSchema = Joi.object({
    userId: Joi.string().guid({ version: ['uuidv4'] }).required(),
    note: Joi.string().allow('', null),
    subchapterUUID: Joi.string().guid({ version: ['uuidv4'] }).required()
    // Add other fields as necessary
});

module.exports = {
    createNotesSchema,
};
