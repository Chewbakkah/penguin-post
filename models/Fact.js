const { Model, DataTypes } = require("sequelize");
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
  }
},
{
  sequelize,
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'fact'
}
);

module.exports = Fact;
