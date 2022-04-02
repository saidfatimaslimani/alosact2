const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  userslivres: {
    type: String,
    required: true
  },
  usersDate: {
    type: Date,
    required: true,
    default: Date.now
  }
})

module.exports = mongoose.model('user', userSchema)