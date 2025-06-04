const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");

const User = require("../schemas/user.schema");

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

User.hasMany(User_role);
User_role.belongsTo(User);

module.exports = User_role;
