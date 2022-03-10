// import important parts of sequelize lib
const { Model, DataTypes } = require("sequelize");
//import our database connection from config.js
const sequelize = require("../config/connection");

class Location extends Model {
	static rating(body, models) {
		return models.Rating.create({
			user_id: body.user_id,
			location_id: body.location_id
		}).then(() => {
			return Location.findOne({
				where: {
					id: body.location_id
				},
				attributes: [
					"id",
					"photoUrl",
					"title",
					"created_at",
					[
						sequelize.literal(
							"(SELECT COUNT(*) FROM rating WHERE location_id = rating.location_id)"
						),
						"location_count"
					]
				],
				include: [
					{
						model: models.Comment,
						attributes: [
							"id",
							"comment_text",
							"location_id",
							"user_id",
							"created_at"
						],
						include: {
							model: models.User,
							attributes: ["username"]
						}
					}
				]
			});
		});
	}
}

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
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "location"
	}
);

module.exports = Location;
