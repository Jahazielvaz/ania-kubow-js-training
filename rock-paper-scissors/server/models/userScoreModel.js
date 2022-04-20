const mongoose = require('mongoose');

const userScoreSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  userName: String,
  score: String
}, {collection: 'score'});


module.exports = mongoose.model('UserScoreModel', userScoreSchema);
