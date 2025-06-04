const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Driver = sequelize.define(
  "driver",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    phone_number: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);


module.exports = Driver;
