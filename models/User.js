// import important parts of sequelize lib
const { Model, DataTypes } = require("sequelize");
//import our database connection from config.js
const sequelize = require("../config/connection");

class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4]
			}
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [4]
			}
		},
		location_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "location",
				key: "id"
			}
		},
		comment_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "comment",
				key: "id"
			}
		},
		likes_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "like",
				key: "id"
			}
		}
	},
	{
		// TODO: Add hook to bcrypt password before create
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: "user"
	}
);

module.exports = User;
