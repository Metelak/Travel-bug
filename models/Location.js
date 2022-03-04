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
		// need to determine how we will add photos... either by user URL or API
		// picture: {
		//   type: DataTypes.VARCHAR,
		//   allowNull: false,
		// },
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
		},
		rating_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "rating",
				key: "id"
			}
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "Location"
	}
);

module.exports = Location;
