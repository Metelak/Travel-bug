const express = require("express");
//const session = require('express.session');
const exphbs = require("express-handlebars");
const routes = require("./controllers/routes");
const sequelize = require("./config/connection");
//const path = require('path');
//const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// const sess = {
//   secret: 'Super secret secret',
//   cookie: {},
//   resave: false,
//   saveUninitialized: true,
//   store: new SequelizeStore({
//     db: sequelize
//   })
// };

// app.use(session(sess));

// import helpers functions, tell Handlebars.js about the helpers file
const helpers = require('./utils/helpers');
// pass helpers to create
const hbs = exphbs.create({ helpers });
//handlebars
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// turn on path to public folder - stylesheets
app.use(express.static(path.join(__dirname, 'public')));

// Use apiRoutes
app.use(routes);
// app.use(require('./controllers/'));


sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log("Now listening"));
});
