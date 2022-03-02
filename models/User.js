// import important parts of sequelize lib
const { Model, DataTypes } = require('sequelize');
//import our database connection from config.js
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'User',
    }
)

module.exports = User;