const joi = require("joi");

const roomSchema = joi.object({
    name: joi.string().required(),
    capacity: joi.number().required(),
    floor: joi.number().required()
});

module.exports = roomSchema;