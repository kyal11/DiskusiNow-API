const bookingRepository = require("../repository/booking.repository");
const bookingService = require("../service/booking.service")

class bookingController {
    async getAllBookings(req, res) {
        try {
            const bookings = await bookingRepository.getAllBooking();
            
            res.status(200).json({
                status: true,
                message: "Bookings retrieved successfully",
                data: bookings
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }

    async getBookingById(req, res) {
        const id = req.params.id;

        try {
            const booking = await bookingRepository.getBookingById(id);
        
            if (!booking) {
                return res.status(404).json({
                    status: false,
                    message: "Booking not found!"
                });
            }

            res.status(200).json({
                status: true,
                message: "Booking found",
                data: booking
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }
    async createBooking(req, res) {
        const userId = req.user.id;
        const dataBooking = req.body;
        
        try {
            const newBooking = await bookingService.createBooking(userId, dataBooking);
            
            res.status(201).json({
                status: true,
                message: "Booking created successfully",
                data: newBooking
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }
    async updateBooking(req, res) {
        const id = req.params.id;
        const dataBooking = req.body;

        try {
            const updatedBooking = await bookingRepository.updateBooking(id, dataBooking);
            
            res.status(200).json({
                status: true,
                message: "Booking updated successfully",
                data: updatedBooking
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }

    async deleteBooking(req, res) {
        const id = req.params.id;

        try {

            const deletedBooking = await bookingService.deleteBooking(id);
            
            res.status(200).json({
                status: true,
                message: "Booking deleted successfully",
                data: deletedBooking
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }
}

module.exports = new bookingController();