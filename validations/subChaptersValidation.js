const Joi = require("joi");

const createSubchapterSchema = Joi.object({
    chapterId: Joi.string().guid({ version: ['uuidv4'] }).required(),
    subChapterContentEnglish: Joi.string().allow('', null),
    subChapterContentHindi: Joi.string().allow('', null),
    subChapterContentSanskrit: Joi.string().allow('', null)
    // Add other fields as necessary
});

module.exports = {
    createSubchapterSchema,
};
