const Joi = require("joi");

const createUserSchema = Joi.object({
    userId: Joi.string().required(),
    username: Joi.string().min(3).max(255).required(),
    email: Joi.string().email().required(),
    mobile: Joi.string().allow('', null),
    displayPicture: Joi.string().allow('', null)
});

module.exports = {
    createUserSchema,
};
