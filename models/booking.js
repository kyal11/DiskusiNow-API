'use strict';
const {
  Model
} = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Booking.belongsTo(models.User, {
        foreignKey: "user_id"
      })
      Booking.belongsTo(models.Room, {
        foreignKey: "room_id"
      })
    }
  }
  Booking.init({
    id: {
      types: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
    user_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    no_phone: DataTypes.STRING,
    date: DataTypes.DATE,
    participant: DataTypes.INTEGER,
    time_booking: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Booking',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Booking;
};