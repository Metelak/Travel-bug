const { Comment } = require("../models");

const commentdata = [
	{
		comment_text:
			"curae donec pharetra magna vestibulum aliquet ultrices erat tortor sollicitudin mi sit amet lobortis sapien sapien non mi integer ac",
		user_id: 1,
		location_id: 1
	},
	{
		comment_text:
			"turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula",
		user_id: 4,
		location_id: 2
	},
	{
		comment_text:
			"tristique in tempus sit amet sem fusce consequat nulla nisl nunc",
		user_id: 1,
		location_id: 1
	},
	{
		comment_text:
			"amet consectetuer adipiscing elit proin risus praesent lectus vestibulum quam sapien varius ut blandit non interdum",
		user_id: 6,
		location_id: 5
	},
	{
		comment_text:
			"magna ac consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus",
		user_id: 8,
		location_id: 1
	},
	{
		comment_text:
			"bibendum imperdiet nullam orci pede venenatis non sodales sed tincidunt eu felis fusce",
		user_id: 4,
		location_id: 1
	},
	{
		comment_text:
			"venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada",
		user_id: 10,
		location_id: 1
	},
	{
		comment_text: "risus dapibus augue vel accumsan tellus nisi eu orci mauris",
		user_id: 8,
		location_id: 1
	},
	{
		comment_text:
			"aliquam quis turpis eget elit sodales scelerisque mauris sit amet",
		user_id: 7,
		location_id: 5
	},
	{
		comment_text:
			"pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis",
		user_id: 6,
		location_id: 4
	}
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;
