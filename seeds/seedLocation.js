const { Location } = require("../models");

const locationdata = [
	{
		title: "London",
		// picture: "http://dummyimage.com/217x100.png/5fa2dd/ffffff",
		text: "hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc",
		user_id: 1
	},
	{
		title: "Tokyo",
		// picture: "http://dummyimage.com/145x100.png/ff4444/ffffff",
		text: "nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum",
		user_id: 5
	},
	{
		title: "Tamarindo",
		// picture: "http://dummyimage.com/104x100.png/ff4444/ffffff",
		text: "quam pharetra magna ac consequat metus sapien ut nunc vestibulum",
		user_id: 7
	},
	{
		title: "Amsterdam",
		// picture: "http://dummyimage.com/163x100.png/5fa2dd/ffffff",
		text: "dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
		user_id: 10
	},
	{
		title: "Sedona",
		// picture: "http://dummyimage.com/110x100.png/dddddd/000000",
		text: "curae duis faucibus accumsan odio curabitur convallis duis consequat dui",
		user_id: 1
	},
	{
		title: "San Fransisco",
		// picture: "http://dummyimage.com/139x100.png/cc0000/ffffff",
		text: "volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",
		user_id: 7
	},
	{
		title: "Portland",
		// picture: "http://dummyimage.com/186x100.png/dddddd/000000",
		text: "potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
		user_id: 8
	},
	{
		title: "Honalulu",
		// picture: "http://dummyimage.com/108x100.png/cc0000/ffffff",
		text: "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
		user_id: 5
	},
	{
		title: "Bar Harbor",
		// picture: "http://dummyimage.com/217x100.png/5fa2dd/ffffff",
		text: "nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
		user_id: 3
	},
	{
		title: "Phuket",
		// picture: "http://dummyimage.com/207x100.png/5fa2dd/ffffff",
		text: "augue a suscipit nulla elit ac nulla sed vel enim sit",
		user_id: 8
	}
];

const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = seedLocation;
