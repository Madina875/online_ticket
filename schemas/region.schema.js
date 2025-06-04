const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Region = sequelize.define(
  "region",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Region;
