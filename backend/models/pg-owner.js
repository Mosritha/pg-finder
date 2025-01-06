const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const ownerSchema = new mongoose.Schema({
  s_no:{
    type: Number,
    required:true,
    minlength: 5,
  },

  full_name: {
    type: String,
    required: true,
    trim: true,
  },
 
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
  },
  phone_no: {
    type: Number,
    required: true,
    minlength: 10,
  },
  registration_date: {
    type: Date,
    required: true,
    trim: true,
  },
  
  
});

module.exports = mongoose.model('Owner', ownerSchema);
