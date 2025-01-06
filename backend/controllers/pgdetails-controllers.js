const PG = require('../models/pg-model');
 const multer = require("multer")
 const express = require("express");
const path = require("path");
const fs = require("fs");




exports.registerPG = async (req, res, next) => {
  try {
    const {
      userid,
      name,
      rooms,
      select_city,
      location,
      mobile_no,
      pg_name,
      door_number,
      nearby_details,
      adress,
      state,
      pincode,
      type,
      room_rent,
      security_deposit,
      facilities,
    } = req.body;

    let images = [];
    if (req.files) {
      images = req.files.map((file) => file.path.replace(/\\/g, "/")); // Normalize file paths
    }

    // Create a new PG
    const newPG = await PG.create({
      userid,
      name,
      rooms,
      select_city,
      location,
      mobile_no,
      pg_name,
      door_number,
      nearby_details,
      adress,
      state,
      pincode,
      type,
      room_rent,
      security_deposit,
      facilities,
      images,
    });

    res.status(201).json({
      success: true,
      message: `PG registered successfully!`,
      pg: newPG,
    });
  } catch (error) {
    return (error);
  }
};








// exports.registerPG = async (req, res) => {
//   try {
//     const pg = new PG(req.body);
//     await pg.save();
//     res.status(201).json({ message: 'PG registered successfully', pg });
//   } catch (error) {
//     res.status(500).json({ message: 'Error registering PG', error });
//   }
// };

// Get all PGs
exports.getAllPGs = async (req, res) => {
  try {
    const pgs = await PG.find();
    res.status(200).json({ pgs });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching PGs', error });
  }
};

exports.getSinglepg = async(req,res) => {
  try{
    const {id} = req.params;
    const singlepg =await PG.findById(id)
    console.log(singlepg);
    res.status(200).json({message: 'get single pg',singlepg});
  }catch(error){
    res.status(500).json({ message: 'Error fetching PGs', error });
  }
}

// Update a PG
exports.updatePG = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedPG = await PG.findByIdAndUpdate(id, req.body, { new: true });
    if (!updatedPG) return res.status(404).json({ message: 'PG not found' });
    res.status(200).json({ message: 'PG updated successfully', updatedPG });
  } catch (error) {
    res.status(500).json({ message: 'Error updating PG', error });
  }
};

// Delete a PG
exports.deletePG = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedPG = await PG.findByIdAndDelete(id);
    if (!deletedPG) return res.status(404).json({ message: 'PG not found' });
    res.status(200).json({ message: 'PG deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting PG', error });
  }
};
