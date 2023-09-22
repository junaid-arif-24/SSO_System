const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, required: true, unique: true },
  password: String, 
  googleId: String, 
  githubId: String, 
  profileImage: String,
  
});

const User = mongoose.model('Users', userSchema);

module.exports = User;