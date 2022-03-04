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
	foreignKey: "comment_id"
});

Comment.belongsTo(User, {
	foreignKey: "comment_id"
});

// Like associations

User.belongsToMany(Location, {
	through: Like,
	foreignKey: "likes_id"
});

Location.belongsToMany(User, {
	through: Like,
	foreignKey: "likes_id"
});

// Location associations

Location.hasMany(Comment, {
	foreignKey: "location_id"
});

Comment.belongsTo(Location, {
	foreignKey: "location_id"
});

// Rating associations

Location.hasOne(Rating, {
	foreignKey: "location_id"
});

Rating.hasOne(Location, {
	foreignKey: "location_id"
});

module.exports = {
	User,
	Rating,
	Comment,
	Location,
	Like
};
