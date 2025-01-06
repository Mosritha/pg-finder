const PgUser = require('../models/pguser-model');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// Register a new user
exports.registerPguser = async (req, res) => {
  const { s_no, full_name,  email, phone_no, registration_date } = req.body;

  try {
    // Check if user already exists
    const PguserExists = await PgUser.findOne({ email });
    if (PguserExists) return res.status(400).json({ message: 'user already exists' });

    // Create new user
    const Pguser = await PgUser.create({ s_no,full_name,  email, phone_no, registration_date });
    res.status(201).json({ message: 'userr registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};






exports.getAllPguser = async (req, res) => {
  try {
    const Pguser = await PgUser.find();
    res.status(200).json({ Pguser });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

exports.getSinglePguser = async (req,res) => {
  try{
    const {id} = req.params;
    const singlePguser =await PgUser.findById(id)
    console.log(singlePguser);
    res.status(200).json({message: 'get single user',singlePguser});
  }catch(error){
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// Update a PG
exports.updatePguser = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPguser = await PgUser.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPguser) return res.status(404).json({ message: 'user not found' });
    res.status(200).json({ message: 'user updated successfully', updatedPguser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Delete a PG
exports.deletePguser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPguser = await PgUser.findByIdAndDelete(id);
    if (!deletedPguser) return res.status(404).json({ message: 'user not found' });
    res.status(200).json({ message: 'user deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};