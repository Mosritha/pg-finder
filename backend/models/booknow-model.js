const mongoose = require('mongoose');
// const bcrypt = require('bcryptjs');

const BookingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  age: {
    type: Number,
    required: true,
  },
  profession: {
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
  phone: {
    type: Number,
    required: true,
    minlength: 10,
  },
  months: {
    type: Number,
    required: true,
    trim: true,
  }, 
  
});

module.exports = mongoose.model('Booking', BookingSchema);
