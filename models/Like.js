// import important parts of sequelize lib
const { Model, DataTypes } = require("sequelize");
//import our database connection from config.js
const sequelize = require("../config/connection");

class Like extends Model {}

Like.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "User",
				key: "id"
			}
		},
		location_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "Location",
				key: "id"
			}
		}
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "Like"
	}
);

module.exports = Like;
