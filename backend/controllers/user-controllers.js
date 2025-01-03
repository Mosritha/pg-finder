const User = require('../models/user-model');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// Register a new user
exports.registerUser = async (req, res) => {
  const { name, mobile_no,email, password, role } = req.body;

  try {
    // Check if user already exists
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // Create new user
    const user = await User.create({ name,mobile_no, email, password, role });
    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Login user
exports.loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Find user by email
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });
    // Generate token
    res.status(200).json({ user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.getAllusers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json({ users });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching PGs', error });
  }
};

exports.getSingleuser = async (req,res) => {
  try{
    const {id} = req.params;
    const singleuser =await User.findById(id)
    console.log(singleuser);
    res.status(200).json({message: 'get single user',singleuser});
  }catch(error){
    res.status(500).json({ message: 'Error fetching users', error });
  }
};

// Update a PG
exports.updateuser = async (req, res) => {
  try {
    const { id } = req.params;
    const updateduser = await User.findByIdAndUpdate(id, req.body, { new: true });
    if (!updateduser) return res.status(404).json({ message: 'user not found' });
    res.status(200).json({ message: 'user updated successfully', updateduser });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
};

// Delete a PG
exports.deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteduser = await User.findByIdAndDelete(id);
    if (!deleteduser) return res.status(404).json({ message: 'user not found' });
    res.status(200).json({ message: 'user deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
};