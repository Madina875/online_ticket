const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const Role = sequelize.define(
  "role",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Role;
