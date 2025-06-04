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

User.belongsToMany(Role, {
  through: User_role,
  // foreignKey: "user_id"
});

Role.belongsToMany(User, { through: User_role });

User_role.belongsTo(User);
User_role.belongsTo(Role);

module.exports = User_role;
