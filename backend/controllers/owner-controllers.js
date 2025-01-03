const Owner = require('../models/pg-owner');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// Register a new user
exports.registerOwner = async (req, res) => {
  const { full_name,  email, phone_no, registration_date } = req.body;

  try {
    // Check if user already exists
    const ownerExists = await Owner.findOne({ email });
    if (ownerExists) return res.status(400).json({ message: 'owner already exists' });

    // Create new user
    const owner = await Owner.create({ full_name,  email, phone_no, registration_date });
    res.status(201).json({ message: 'Owner registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};






exports.getAllowner = async (req, res) => {
  try {
    const owner = await Owner.find();
    res.status(200).json({ owner });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching owners', error });
  }
};

exports.getSingleowner = async (req,res) => {
  try{
    const {id} = req.params;
    const singleowner =await Owner.findById(id)
    console.log(singleowner);
    res.status(200).json({message: 'get single owner',singleowner});
  }catch(error){
    res.status(500).json({ message: 'Error fetching owners', error });
  }
};

// Update a PG
exports.updateowner = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedowner = await Owner.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedowner) return res.status(404).json({ message: 'owner not found' });
    res.status(200).json({ message: 'owner updated successfully', updatedowner });
  } catch (error) {
    res.status(500).json({ message: 'Error updating owner', error });
  }
};

// Delete a PG
exports.deleteowner = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedowner = await Owner.findByIdAndDelete(id);
    if (!deletedowner) return res.status(404).json({ message: 'owner not found' });
    res.status(200).json({ message: 'owner deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting owner', error });
  }
};