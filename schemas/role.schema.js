const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const User_role = require("../schemas/user-role.schema");

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

Role.hasMany(User_role);
User_role.belongsTo(Role);

module.exports = Role;
