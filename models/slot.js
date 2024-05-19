'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Slot extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Slot.belongsTo(models.Room, {
        foreignKey: "room_id"
      })
    }
  }
  Slot.init({
    id: {
      types: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
     },
    room_id: DataTypes.INTEGER,
    star_time: DataTypes.STRING,
    end_time: DataTypes.STRING,
    is_booked: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Slot',
    timestamps: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  });
  return Slot;
};