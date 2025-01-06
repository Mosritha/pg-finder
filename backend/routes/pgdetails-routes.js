const express = require('express');
const router = express.Router();
const pgController = require('../controllers/pgdetails-controllers');
// const upload = require("../controllers/middleware/upload"); 
const multer = require("multer");
const path = require("path");
const fs = require("fs");


// Define the upload directory
const uploadDir = path.join(__dirname, "uploads", "pg_images");

// Ensure the directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, uploadDir); // Use the ensured directory
  },
  filename: (req, file, cb) => {
    const uniqueName = `${Date.now()}-${file.originalname}`;
    cb(null, uniqueName); // Save file with a unique name
  },
});

// Configure Multer file filter and limits
const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) => {
    if (file.mimetype.startsWith("image/")) {
      cb(null, true);
    } else {
      cb(new Error("Only image files are allowed!"), false);
    }
  },
});

  

// Routes for PG management
router.post('/register',upload.array("images", 5), pgController.registerPG);
router.get('/', pgController.getAllPGs);
router.get('/:id',pgController.getSinglepg);
router.put('/:id', pgController.updatePG);
router.delete('/:id', pgController.deletePG);

module.exports = router;
