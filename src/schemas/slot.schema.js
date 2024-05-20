const joi = require("joi");

const slotSchema = joi.object({
    room_id: joi.number().required(),
    start_time: joi.string().required(),
    end_time: joi.string().required(),
    is_booked: joi.bool().required()
});

module.exports = slotSchema;