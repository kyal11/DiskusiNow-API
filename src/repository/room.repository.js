const { Room, Slot } = require("../../models");

class RoomRepository {
    async getAllRooms() {
        try {
            const rooms = await Room.findAll({
                include:[{
                    model: Slot,
                    as: "slots"
                }]
            });
            return rooms;
        } catch (error) {
            throw error;
        }
    }

    async getRoomById(id) {
        try {
            const room = await Room.findByPk(id);
            return room;
        } catch (error) {
            throw error;
        }
    }

    async createRoom(roomData) {
        try {
            const room = await Room.create(roomData);
            return room;
        } catch (error) {
            throw error;
        }
    }

    async updateRoom(id, roomData) {
        try {
            const room = await Room.findByPk(id);
            if (!room) {
                throw new Error('Room not found');
            }
            await room.update(roomData);
            return room;
        } catch (error) {
            throw error;
        }
    }

    async deleteRoom(id) {
        try {
            const room = await Room.findByPk(id);
            if (!room) {
                throw new Error('Room not found');
            }
            await room.destroy();
            return true; 
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new RoomRepository();
