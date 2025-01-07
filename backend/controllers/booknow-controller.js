const Booking = require('../models/booknow-model');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// Register a new user
exports.registerBooking = async (req, res) => {
    console.log("Request Body:", req.body); // Log incoming data
    try {
      const { name, age, profession, email, phone, months } = req.body;
  
      // Check if booking already exists
      const bookingExists = await Booking.findOne({ email });
      if (bookingExists) {
        console.log("Booking already exists for email:", email);
        return res.status(400).json({ message: "Booking with this email already exists." });
      }
  
      // Create new booking
      const booking = await Booking.create({ name, age, profession, email, phone, months });
      console.log("Booking created:", booking);
      res.status(201).json({ message: "Booking completed successfully", booking });
    } catch (err) {
      console.error("Error in registerBooking:", err.message);
      res.status(500).json({ message: "Internal server error", error: err.message });
    }
  };
  




exports.getAllbookings = async (req, res) => {
  try {
    const booking = await Booking.find();
    res.status(200).json({ booking });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

exports.getSinglebooking = async (req,res) => {
  try{
    const {id} = req.params;
    const singlebooking =await Booking.findById(id)
    console.log(singlebooking);
    res.status(200).json({message: 'get single booking',singlebooking});
  }catch(error){
    res.status(500).json({ message: 'Error fetching bookings', error });
  }
};

// Update a PG
exports.updatebookings = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedbooking = await Booking.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedbooking) return res.status(404).json({ message: 'booking not found' });
    res.status(200).json({ message: 'booking updated successfully', updatedbooking });
  } catch (error) {
    res.status(500).json({ message: 'Error updating booking', error });
  }
};

// Delete a PG
exports.deletebooking = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedbooking = await Booking.findByIdAndDelete(id);
    if (!deletedbooking) return res.status(404).json({ message: 'booking not found' });
    res.status(200).json({ message: 'booking deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting booking', error });
  }
};