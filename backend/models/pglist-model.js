const mongoose = require('mongoose');

const pglistSchema = new mongoose.Schema({
  ownerid:{ type: String},
  pg_name: {type: String},
  description: { type: String},
  details: {type: String},
  location: {type: String},
  email: {type: String},
  mobile_no: {type: Number},
  nearby_details: {type: String},
  room_rent: { type: Number },
  security_deposit: {type: Number},
  images: { type:String },
  facilities: { type:String },
}, { timestamps: true });

module.exports = mongoose.model('PGList', pglistSchema);
