const { Slot } = require("../../models");

class SlotRepository {
    async getAllSlots() {
        try {
            const slots = await Slot.findAll();
            return slots;
        } catch (error) {
            throw error;
        }
    }

    async getSlotById(id) {
        try {
            const slot = await Slot.findByPk(id);
            return slot;
        } catch (error) {
            throw error;
        }
    }

    async getSlotByRoomId(roomId) {
        try {
            const slot = await Slot.findOne({
                where: {
                    room_id: roomId
                }
            });
            return slot;
        } catch (error) {
            throw error;
        }
    }

    async getSlotByStartTime(roomId, startTime) {
        try {
            const slot = await Slot.findOne({
                where: {
                    room_id: roomId,
                    start_time: startTime
                }
            });
            return slot;
        } catch (error) {
            throw error;
        }
    }

    async createSlot(slotData) {
        try {
            const newSlot = await Slot.create(slotData);
            return newSlot;
        } catch (error) {
            throw error;
        }
    }
    async updateStatusSlot(id) {
        try {
            const slot = await Slot.findByPk(id);
            if (!slot) {
                throw new Error('Slot not found');
            }
            slot.is_booked = true;
            await slot.save();
            return slot;
        } catch (error) {
            throw error;
        }
    }
    async updateSlot(id, slotData) {
        try {
            const slot = await Slot.findByPk(id);
            if (!slot) {
                throw new Error('Slot not found');
            }
            await slot.update(slotData);
            return slot;
        } catch (error) {
            throw error;
        }
    }

    async deleteSlot(id) {
        try {
            const slot = await Slot.findByPk(id);
            if (!slot) {
                throw new Error('Slot not found');
            }
            await slot.destroy();
            return true;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new SlotRepository();
