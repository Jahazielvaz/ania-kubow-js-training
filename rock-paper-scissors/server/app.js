const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const path = require('path');
const router = express.Router();

// MIddleware
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'ui')));

// DB



//CORS handling


// Routes



// Requests


// Error Handling


module.exports = app;
