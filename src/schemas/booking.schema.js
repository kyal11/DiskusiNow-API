const joi = require("joi");

const booking = joi.object({
    user_id : joi.number(),
    room_id : joi.number().required(),
    no_phone : joi.string().required(),
    date : joi.date().required(),
    participant : joi.number().required(),
    time_booking : joi.string().required(),
    description : joi.string() 
});

module.exports = booking;