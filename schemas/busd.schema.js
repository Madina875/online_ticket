const sequelize = require("../config/db");
const { DataTypes } = require("sequelize");
const Driver = require("./drivers.schema");
const Buses = require("./buses.schema");

const Busd = sequelize.define(
  "busd",
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

Driver.hasMany(Busd);
Busd.belongsTo(Driver);

Buses.hasMany(Busd);
Busd.belongsTo(Buses);

module.exports = Busd;
