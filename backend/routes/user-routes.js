const express = require('express');
const UserController = require('../controllers/user-controllers');
const router = express.Router();

router.post('/register', UserController.registerUser);
router.post('/login', UserController.loginUser);
router.get('/', UserController.getAllusers);
router.get('/:id',UserController.getSingleuser);
router.put('/:id', UserController.updateuser);
router.delete('/:id', UserController.deleteuser);


module.exports = router;
