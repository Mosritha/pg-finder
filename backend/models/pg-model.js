const mongoose = require('mongoose');

const pgSchema = new mongoose.Schema({
  userid: { type: String },
  name: { type: String},
  rooms: {type: String},
  select_city: {type:String},
  location: {type: String},
  mobile_no: {type: Number,},
  pg_name: { type: String },
  door_number: {type: String},
  nearby_details:{type: String},
  adress: {type: String},
  state: {type: String},
  pincode: {type: Number},
  type: { type: String },
  room_rent: { type: Number },
  security_deposit: {type: Number},
  images: { type:String },
  facilities: { type:String },
}, { timestamps: true });

module.exports = mongoose.model('PG', pgSchema);
