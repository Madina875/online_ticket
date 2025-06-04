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

Buses.belongsToMany(Driver, {
  through: Busd,
  // foreignKey: "user_id"
});

Driver.belongsToMany(Buses, { through: Busd });

Busd.belongsTo(Busd);
Busd.belongsTo(Driver);

module.exports = Busd;
