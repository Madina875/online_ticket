const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Buses = sequelize.define(
  "buses",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    number_plate: {
      type: DataTypes.STRING,
    },
    seat_count: {
      type: DataTypes.STRING,
    },
    model: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Buses;
