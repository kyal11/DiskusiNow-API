'use strict';
const bcrypt = require('bcrypt');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id: 1,
        name: 'Wisnu Andika',
        email: '2110511043@mahasiswa.upnvj.ac.id',
        nim: '2110511043',
        password: await bcrypt.hash('wisnu123', 10), 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        name: 'Rizky Al Arief',
        email: '2110511069@mahasiswa.upnvj.ac.id',
        nim: '2110511069',
        password: await bcrypt.hash('rizky123', 10), 
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        name: 'Muharim Awaluddin',
        email: '2110511074@mahasiswa.upnvj.ac.id',
        nim: '2110511074',
        password: await bcrypt.hash('muharim123', 10),
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('User', null, {});
  }
};
