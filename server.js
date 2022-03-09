const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const routes = require("./controllers/routes");
const sequelize = require("./config/connection");
const path = require("path");
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const helpers = require("./utils/helpers");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
	secret: process.env.SECRET,
	cookie: {},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize
	})
};

app.use(session(sess));

// import helpers functions, tell Handlebars.js about the helpers file
const hbs = exphbs.create({ helpers });

//handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

// Use apiRoutes
app.use(routes);
// app.use(require('./controllers/'));

sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening"));
});

console.log(NaN);