// import important parts of sequelize lib
const { Model, DataTypes } = require("sequelize");
//import our database connection from config.js
const sequelize = require("../config/connection");

class Rating extends Model {}

Rating.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		rating: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				max: 5,
				min: 1
			}
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id"
			}
		},
		location_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "location",
				key: "id"
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "rating"
	}
);

module.exports = Rating;
