const mongoose = require('mongoose');

const UserScheme = new mongoose.Schema({
  firstName: String,
  lastName: String,
  password: String,
  email: String,
})

module.exports = mongoose.model("User", UserScheme);