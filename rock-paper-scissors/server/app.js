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

// Route Imports
const userScoreRoutes = require('./routes/userScore');

// DB
app.use('/', (req, res, next) => {
  mongoose.connect(`mongodb+srv://main:Chato225@cluster0.bug2z.mongodb.net/gamescore?retryWrites=true&w=majority`,{
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(
    console.log('Connection with DB established...')
  ).catch(err => {
    res.status(500).json({message: err})
  })

  next();
})

app.get('/', (req, res, next) => {
  res.status(200).json({message: 'Connection to db working'});
})


app.use('/userscore', userScoreRoutes);



//CORS handling
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

  if(req.method === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.status(200).json({});
  };

  next()
});

// Routes
// app.use('/user-info', userInfoRoutes);
app.use('/user-score', userScoreRoutes);



// Requests


// Error Handling
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 400;
  next(error);
})

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message
    }
  })
})

module.exports = app;
