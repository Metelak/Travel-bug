const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class Comment extends Model {}

Comment.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		comment_text: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		user_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "user",
				key: "id"
			},
			onDelete: "SET NULL"
		},
		location_id: {
			type: DataTypes.INTEGER,
			references: {
				model: "location",
				key: "id"
			},
			onDelete: "SET NULL"
		}
		//created_at: {

		//}
	},
	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "comment"
	}
);

module.exports = Comment;
