'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Users",
            key: "id"
          }
        }
      },
      user_name: {
        type: Sequelize.STRING
      },
      room_id: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "Rooms",
            key: "id"
          }
        }
      },
      room_name: {
        type: Sequelize.STRING
      },
      no_phone: {
        type: Sequelize.STRING
      },
      date: {
        type: Sequelize.DATE
      },
      participant: {
        type: Sequelize.INTEGER
      },
      time_booking: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.TEXT
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Bookings');
  }
};