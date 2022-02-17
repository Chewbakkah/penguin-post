const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Repost extends Model {}

Repost.init(
    {
        
    }
)

module.exports = Repost;