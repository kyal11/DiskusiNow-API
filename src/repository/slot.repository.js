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

    async createSlot(slotData) {
        try {
            const newSlot = await Slot.create(slotData);
            return newSlot;
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
