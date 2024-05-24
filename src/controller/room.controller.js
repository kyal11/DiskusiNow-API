const roomRepository = require("../repository/room.repository");

class RoomController {
    async getAllRooms(req, res) {
        try {
            const rooms = await roomRepository.getAllRooms();
            res.status(200).json({
                status: true,
                message: "Rooms retrieved successfully",
                data: rooms
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }

    async getRoomById(req, res) {
        const id = req.params.id;

        try {
            const room = await roomRepository.getRoomById(id);
        
            if (!room) {
                return res.status(404).json({
                    status: false,
                    message: "Room not found!"
                });
            }

            res.status(200).json({
                status: true,
                message: "Room found",
                data: room
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }

    async createRoom(req, res) {
        const roomData = req.body;

        try {
            const newRoom = await roomRepository.createRoom(roomData);

            res.status(201).json({
                status: true,
                message: "Room created successfully",
                data: newRoom
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }

    async updateRoom(req, res) {
        const id = req.params.id;
        const roomData = req.body;

        try {
            const updatedRoom = await roomRepository.updateRoom(id, roomData);

            res.status(200).json({
                status: true,
                message: "Room updated successfully",
                data: updatedRoom
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }

    async deleteRoom(req, res) {
        const id = req.params.id;

        try {
            await roomRepository.deleteRoom(id);

            res.status(200).json({
                status: true,
                message: "Room deleted successfully"
            });
        } catch (error) {
            res.status(400).json({
                status: false,
                message: error.message
            });
        }
    }
}

module.exports = new RoomController();
