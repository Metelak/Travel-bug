const { Location } = require("../models");

const locationdata = [
	{
		title: "London",
		picture: "https://images.unsplash.com/photo-1520986606214-8b456906c813?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		text: "hendrerit at vulputate vitae nisl aenean lectus pellentesque eget nunc",
		user_id: 1
	},
	{
		title: "Tokyo",
		picture: "https://images.unsplash.com/photo-1513407030348-c983a97b98d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
		text: "nulla sed vel enim sit amet nunc viverra dapibus nulla suscipit ligula in lacus curabitur at ipsum",
		user_id: 5
	},
	{
		title: "Tamarindo",
		picture: "https://images.unsplash.com/photo-1629847172830-c1848b9e513a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
		text: "quam pharetra magna ac consequat metus sapien ut nunc vestibulum",
		user_id: 7
	},
	{
		title: "Amsterdam",
		picture: "https://images.unsplash.com/photo-1584003564911-a7a321c84e1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
		text: "dictumst maecenas ut massa quis augue luctus tincidunt nulla mollis molestie lorem quisque ut erat",
		user_id: 10
	},
	{
		title: "Sedona",
		picture: "https://images.unsplash.com/photo-1617771431802-58b6aaf93399?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
		text: "curae duis faucibus accumsan odio curabitur convallis duis consequat dui",
		user_id: 1
	},
	{
		title: "San Fransisco",
		picture: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
		text: "volutpat dui maecenas tristique est et tempus semper est quam pharetra magna ac",
		user_id: 7
	},
	{
		title: "Portland",
		picture: "https://images.unsplash.com/photo-1635209896150-ef275dbd52a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=775&q=80",
		text: "potenti in eleifend quam a odio in hac habitasse platea dictumst maecenas ut massa quis augue luctus tincidunt",
		user_id: 8
	},
	{
		title: "Maui",
		picture: "https://images.unsplash.com/photo-1583364493238-248032147fbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
		text: "risus praesent lectus vestibulum quam sapien varius ut blandit non interdum in ante vestibulum ante ipsum primis in faucibus",
		user_id: 5
	},
	{
		title: "Bar Harbor",
		picture: "https://images.unsplash.com/photo-1599433948349-78c83d994962?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
		text: "nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in",
		user_id: 3
	},
	{
		title: "Phuket",
		picture: "https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=839&q=80",
		text: "augue a suscipit nulla elit ac nulla sed vel enim sit",
		user_id: 8
	}
];

const seedLocation = () => Location.bulkCreate(locationdata);

module.exports = seedLocation;
