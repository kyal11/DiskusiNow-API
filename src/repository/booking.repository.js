const { Booking } = require("../../models")

class bookingRepository {
    
    async getAllBooking() {
        try {
            const bookings = await Booking.findAll();
            return bookings
        } catch (error) {
            throw error
        }
    }
    async getBookingById(id) {
        try {
            const booking = await Booking.findByPk(id);
            return booking;
        } catch (error) {
            throw error;
        }
    }
    async getBookingByUserId(id) {
        try {
            const bookings = await Booking.findAll({
                where: {
                    user_id: id
                }
            });
            if (!bookings || bookings.length === 0) {
                throw new Error('No bookings found for the user');
            }
            return bookings; 
        } catch (error) {
            throw error;
        }
    }

    async createBooking(dataBooking) {
        try {
            const newBooking = await Booking.create(dataBooking);
            return newBooking;
        } catch (error) {
            throw error;
        }
    }

    async updateBooking(id, dataBooking) {
        try {
            const booking = await Booking.findByPk(id);

            if (!booking) {
                throw new Error('Booking not found');
            }
            await booking.update(dataBooking);
            return booking;
        } catch (error) {
            throw error;
        }
    }

    async deleteBooking(id) {
        try {
            const booking = await Booking.findByPk(id);

            if (!booking) {
                throw new Error('Booking not found');
            }
            await booking.destroy(dataBooking);
            return booking;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new bookingRepository();