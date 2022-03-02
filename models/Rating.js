// import important parts of sequelize lib
const { Model, DataTypes } = require('sequelize');
//import our database connection from config.js
const sequelize = require('../config/connection');

class Rating extends Model {}

Rating.init(
    {

    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Rating',
    }
)

module.exports = Rating;