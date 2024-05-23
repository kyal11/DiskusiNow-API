'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Rooms', [
      {
        id: 1,
        name: "Ruang 1A",
        capacity: 5,
        floor: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: "Ruang 1B",
        capacity: 5,
        floor: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: "Ruang 2A",
        capacity: 5,
        floor: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        name: "Ruang 2B",
        capacity: 5,
        floor: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Room', null, {});
  }
};
