const bookingRepository = require("../repository/booking.repository");
const roomRepository = require("../repository/room.repository");
const slotRepository = require("../repository/slot.repository");

class bookingService {
    async createBooking(userId, dataBooking) {
        try {
            const { room_id, time_booking, no_phone, date, participant, description } = dataBooking;
            
            const slot = await slotRepository.getSlotByStartTime(room_id, time_booking);
            if (!slot || slot.is_booked) {
                throw new Error("Slot is not available");
            }

            const newBookingData = {
                user_id: userId,
                room_id: room_id,
                no_phone: no_phone,
                date: date,
                participant: participant,
                time_booking: time_booking,
                description: description
            };

            const newBooking = await bookingRepository.createBooking(newBookingData);
            await slotRepository.updateStatusSlot(slot.id);

            return newBooking; 
        } catch (error) {
            throw error; 
        }
    }
}

module.exports = new bookingService();
