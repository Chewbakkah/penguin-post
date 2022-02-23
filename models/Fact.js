const { Model, Datatypes } = require("sequelize");
const sequelize = require("../config/connection");

class Fact extends Model {}

Fact.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fact: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Fact;
