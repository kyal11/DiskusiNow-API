const slotRepository = require("../repository/slot.repository");

class SlotController {
    async getAllSlots(req, res) {
        try {
            const slots = await slotRepository.getAllSlots();
            
            res.status(200).json({
                status: true,
                message: "Slots retrieved successfully",
                data: slots
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }

    async getSlotById(req, res) {
        const id = req.params.id;

        try {
            const slot = await slotRepository.getSlotById(id);
        
            if (!slot) {
                return res.status(404).json({
                    status: false,
                    message: "Slot not found!"
                });
            }

            res.status(200).json({
                status: true,
                message: "Slot found",
                data: slot
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }

    async createSlot(req, res) {
        const slotData = req.body;

        try {
            const newSlot = await slotRepository.createSlot(slotData);

            res.status(201).json({
                status: true,
                message: "Slot created successfully",
                data: newSlot
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }

    async updateSlot(req, res) {
        const id = req.params.id;
        const slotData = req.body;

        try {
            const updatedSlot = await slotRepository.updateSlot(id, slotData);

            res.status(200).json({
                status: true,
                message: "Slot updated successfully",
                data: updatedSlot
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }

    async deleteSlot(req, res) {
        const id = req.params.id;

        try {
            await slotRepository.deleteSlot(id);

            res.status(200).json({
                status: true,
                message: "Slot deleted successfully"
            });
        } catch (error) {
            res.status(500).json({
                status: false,
                message: error.message
            });
        }
    }
}

module.exports = new SlotController();
