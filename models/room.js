'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Room.hasMany(models.Booking, {
        foreignKey: "room_id"
      })
      Room.hasMany(models.Slot, {
        foreignKey: "room_id"
      })
    }
  }
  Room.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    floor: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });
  return Room;
};