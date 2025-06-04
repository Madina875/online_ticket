const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const User_role = sequelize.define(
  "user_role",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = User_role;
