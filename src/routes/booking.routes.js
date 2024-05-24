const express = require("express");
const bookingController = require("../controller/booking.controller");
const {bookingValidator} = require("../middleware/request.validator");
const router = express.Router();

router.get('/', bookingController.getAllBookings);
router.get('/:id', bookingController.getBookingById);
router.post('/', bookingValidator, bookingController.createBooking);
router.put('/id', bookingValidator, bookingController.updateBooking);
router.delete('/:id', bookingController.deleteBooking);

module.exports = router;