const joi = require("joi");

const userSchema = joi.object({
    name: joi.string().required(),
    email: joi.string().email().required(),
    nim: joi.string().required(),
    password: joi.string().required()
});

module.exports = userSchema;