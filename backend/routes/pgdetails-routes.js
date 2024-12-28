const express = require('express');
const router = express.Router();
const pgController = require('../controllers/pgdetails-controllers');

// Routes for PG management
router.post('/register', pgController.registerPG);
router.get('/', pgController.getAllPGs);
router.get('/:id',pgController.getSinglepg);
router.put('/:id', pgController.updatePG);
router.delete('/:id', pgController.deletePG);

module.exports = router;
