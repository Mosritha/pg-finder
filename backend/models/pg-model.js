const mongoose = require('mongoose');

const pgSchema = new mongoose.Schema({
  userid: { type: String, required: true },
  name: { type: String, required: true},
  
  rooms: {type: Number, required: true},
  select_city: {type:String, required: true},
  location: {type: String, required: true},
  mobile_no: {type: Number, required:true},
  pg_name: { type: String, required: true },
  door_number: {type: Number, required: true},
  nearby_details:{type: String, required: true},
  adress: {type: String, required: true},
  state: {type: String, required: true},
  pincode: {type: Number, required: true},
  type: { type: String, required: true },
  room_rent: { type: Number, required: true },
  security_deposit: {type: Number, required: true},
  images: { type: [String], default: [] },
  facilities: [String], // List of facilities
}, { timestamps: true });

module.exports = mongoose.model('PG', pgSchema);
