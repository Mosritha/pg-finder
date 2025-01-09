const express = require('express');
const BookingController = require('../controllers/booknow-controller');
const router = express.Router();


router.post('/register', BookingController.registerBooking);
router.get('/status/:userid', BookingController.getstatusbyuserid);
router.get('/', BookingController.getAllbookings);
router.get('/:id',BookingController.getSinglebooking);
router.put('/:id', BookingController.updatebookings);
router.delete('/:id', BookingController.deletebooking);


module.exports = router;
