const express = require('express');
const router = express.Router();
const pgController = require('../controllers/pgdetails-controllers');
const PG = require('../models/pg-model');
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/pg_images');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// Filter to accept only images
const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

// Multer middleware
const upload = multer({ storage, fileFilter });

// Updated route with profile image upload
router.post("/register", upload.single('images'), async (req, res, next) => {
  try {
    const {userid,
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
      facilities, } = req.body;
      // console.log(req.body);
      
    // Check if a file was uploaded
      let images = null;
      if (req.file) {
        images = req.file.path.replace(/\\/g, "/");   // Path to the uploaded image
      }

    // Create the user with the profile image
    const user = {
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
      images:images
    };

    // Save the new user to the database
    await PG.create(user);

    res.status(201).json({
      success: true,
      message: "User created successfully!",
      data:user // Return user data in response
    });
  } catch (err) {
    console.log(err);
    
  }
});


router.get('/', pgController.getAllPGs);
router.get('/:id',pgController.getSinglepg);
router.put('/:id', pgController.updatePG);
router.delete('/:id', pgController.deletePG);

module.exports = router;
