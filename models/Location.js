// import important parts of sequelize lib
const { Model, DataTypes } = require("sequelize");
//import our database connection from config.js
const sequelize = require("../config/connection");

class Location extends Model {}

Location.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		title: {
			type: DataTypes.STRING,
			allowNull: false
		},
		picture: {
			type: DataTypes.STRING,
			allowNull: false,
			defaultValue:
				"http://backpackingworldwide.com/wp-content/uploads/2016/04/Travel-Night-globe.png"
		},
		text: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id"
			},
			onDelete: "SET NULL"
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "location"
	}
);

module.exports = Location;
