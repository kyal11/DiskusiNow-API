    const {
        userSchema,
        roomSchema,
        slotSchema,
        bookingSchema,
        loginSchema
    } = require("../schemas/index");

    const userRegisterValidator = (req, res, next) => {
        const userData = req.body;

        const { error } = userSchema.validate(userData);

        if (error) {
            return res.status(400).json({
                status: false,
                message: error.details[0].message
            });
        }
        next();
    };

    const loginValidator = (req, res, next) => {
        const loginData = req.body;

        const { error } = loginSchema.validate(loginData);

        if (error) {
            return res.status(400).json({
                status: false,
                message: error.details[0].message
            });
        }
        next();
    };

    const roomValidator = (req, res, next) => {
        const roomData = req.body;

        const { error } = roomSchema.validate(roomData);

        if (error) {
            return res.status(400).json({
                status: false,
                message: error.details[0].message
            });
        }
        next();
    };

    const slotValidator = (req, res, next) => {
        const slotData = req.body;

        const { error } = slotSchema.validate(slotData);

        if (error) {
            return res.status(400).json({
                status: false,
                message: error.details[0].message
            });
        }
        next();
    };

    const bookingValidator = (req, res, next) => {
        const bookingData = req.body;

        const { error } = bookingSchema.validate(bookingData);

        if (error) {
            return res.status(400).json({
                status: false,
                message: error.details[0].message
            });
        }
        next();
    };


    module.exports = {
        userRegisterValidator,
        roomValidator,
        slotValidator,
        bookingValidator,
        loginValidator
    };
