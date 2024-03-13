const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String,
  //track user credits, default is 0
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema);
