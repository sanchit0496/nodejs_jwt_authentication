const Joi = require("joi");

const createChapterSchema = Joi.object({
    chapterNumber: Joi.string().max(10).required(),
    chapterTitleSanskrit: Joi.string().allow('', null).required(),
    chapterTitleHindi: Joi.string().allow('', null).required(),
    chapterTitleEnglish: Joi.string().allow('', null).required()
    // Add other fields as necessary
});

module.exports = {
    createChapterSchema,
};
