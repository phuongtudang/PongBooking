const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  twitterId: String,
  twitterDisplayName: String,
  going: []
});

mongoose.model('users', userSchema)
