const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./controllers/');
const path = require('path');

//const app = express();
//const PORT = process.env.PORT || 3001;

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));