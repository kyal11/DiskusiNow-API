const bookingRepository = require("../repository/booking.repository");

class userService{
    async userHistoryBooking(userId) {
        try {
            const userBookings = await bookingRepository.getBookingByUserId(userId);
            
            if (!userBookings) {
                throw new Error("No booking history found for this user.");
            }

            return userBookings;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new userService();