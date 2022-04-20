const express = require('express');
const router = express.Router();
const UserScoreModel = require('../models/userScoreModel');
const mongoose = require('mongoose');

router.get('/', (req, res, next) => {
  UserScoreModel.find()
  .exec()
  .then(result => {
    res.status(200).json({
      data: result,
      message: 'userScore routes working'
    });
  })
  .catch(err => {
    res.status(500).json({
      error: {message: err}
    })
  })

});

// router.get('/', (req, res, next) => {
//   res.status(200).json({message: 'userscore Route working properly...'})
// })


router.post('/', (req, res, next) => {
  let score = new UserScoreModel({
    _id: mongoose.Types.ObjectId(),
    userName: req.body.userName,
    score: req.body.score
  })

  score.save()
  .then((result) => {
    console.log(result)
    res.status(201).json({message: 'Your data has been posted'});
  }).catch(error => {
    console.log(error)
  })

  next();
})




module.exports = router;
