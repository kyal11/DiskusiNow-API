const joi = require("joi");

const userSchema = joi.object({
    name: joi.string().required(),
    email: Joi.string().regex(/.*@.*/).required(),
    nim: joi.string().required(),
    password: joi.string().required()
});

module.exports = userSchema;