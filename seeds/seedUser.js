const { User } = require("../models");

const userdata = [
	{
		username: "mchilderhouse0",
		email: "gcrickett0@mapquest.com",
		password: "tWQ1D5Md"
	},
	{
		username: "msooper1",
		email: "sfetter1@umich.edu",
		password: "U6Zr55"
	},
	{
		username: "calleway2",
		email: "valbisser2@csmonitor.com",
		password: "peuukxFlaJ"
	},
	{
		username: "kfechnie3",
		email: "fmaruska3@princeton.edu",
		password: "wn8fWuUJRY"
	},
	{
		username: "trayer4",
		email: "mhurler4@skype.com",
		password: "rJiPqMhZB"
	},
	{
		username: "asussans5",
		email: "fewens5@geocities.jp",
		password: "nJrB47T"
	},
	{
		username: "ibaron6",
		email: "kbarnewell6@dropbox.com",
		password: "lK8cdRyEmOe"
	},
	{
		username: "krantoul7",
		email: "mfasson7@adobe.com",
		password: "yLjyiDR6AP3W"
	},
	{
		username: "obrotherick8",
		email: "vgateley8@shareasale.com",
		password: "ySxlc7Cg"
	},
	{
		username: "fwinteringham9",
		email: "agrigg9@huffingtonpost.com",
		password: "fqs7tE"
	}
];

const seedUsers = () => User.bulkCreate(userdata);

module.exports = seedUsers;
