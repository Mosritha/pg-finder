const express = require('express');
const OwnerController = require('../controllers/owner-controllers');
const router = express.Router();


router.post('/register', OwnerController.registerOwner);

router.get('/', OwnerController.getAllowner);
router.get('/:id',OwnerController.getSingleowner);
router.put('/:id', OwnerController.updateowner);
router.delete('/:id', OwnerController.deleteowner);


module.exports = router;
