'use strict';
const {
  Model
} = require("sequelize");
const { format, parseISO } = require('date-fns')
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
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
   },
    user_id: DataTypes.INTEGER,
    room_id: DataTypes.INTEGER,
    no_phone: DataTypes.STRING,
    date: {
      type: DataTypes.DATE,
      get() {
        const rawValue = this.getDataValue('date');
        return rawValue ? format(rawValue, 'dd-MM-yyyy') : null;
      },
      set(value) {
        const formattedDate = parseISO(value.split('-').reverse().join('-'))
        this.setDataValue('date', formattedDate)
      }
    },
    participant: DataTypes.INTEGER,
    time_booking: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Booking',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  });
  return Booking;
};