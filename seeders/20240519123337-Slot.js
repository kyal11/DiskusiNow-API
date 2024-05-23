'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const rooms = [1, 2, 3, 4];
    const slots = [];

    rooms.forEach(roomId => {
      for (let hour = 8; hour < 16; hour++) {
        slots.push({
          room_id: roomId,
          start_time: `${hour.toString().padStart(2, '0')}:00`,
          end_time: `${(hour + 1).toString().padStart(2, '0')}:00`,
          is_booked: false,
          createdAt: new Date(),
          updatedAt: new Date()
        });
      }
    });

    await queryInterface.bulkInsert('Slots', slots, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Room', null, {});
  }
};
