//Import models
const User = require("./User");
const Rating = require("./Rating");
const Comment = require("./Comment");
const Location = require("./Location");
const Like = require("./Like");

// User associations

User.hasMany(Rating, {
	foreignKey: "user_id"
});

Rating.belongsTo(User, {
	foreignKey: "user_id"
});

User.hasMany(Location, {
	foreignKey: "user_id"
});

Location.belongsTo(User, {
	foreignKey: "user_id"
});

User.hasMany(Comment, {
	foreignKey: "user_id"
});

Comment.belongsTo(User, {
	foreignKey: "user_id"
});

// Like associations
User.belongsToMany(Location, {
	through: Like,
	as: "liked_location",

	foreignKey: "user_id",
	onDelete: "SET NULL"
});

Location.belongsToMany(User, {
	through: Like,
	as: "liked_location",
	foreignKey: "location_id",
	onDelete: "SET NULL"
});

User.hasMany(Like, {
	foreignKey: "user_id"
});

Like.belongsTo(User, {
	foreignKey: "user_id"
});

Location.hasMany(Like, {
	foreignKey: "location_id"
});

Like.belongsTo(Location, {
	foreignKey: "location_id"
});

// Location associations

Location.hasMany(Comment, {
	foreignKey: "location_id"
});

Comment.belongsTo(Location, {
	foreignKey: "location_id"
});

// Rating associations

Location.hasMany(Rating, {
	foreignKey: "location_id"
});

Rating.belongsTo(Location, {
	foreignKey: "location_id"
});

module.exports = {
	User,
	Rating,
	Comment,
	Location,
	Like
};
