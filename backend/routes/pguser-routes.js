const express = require('express');
const PGUserController = require('../controllers/pguser-controllers');
const router = express.Router();


router.post('/register', PGUserController.registerPguser);

router.get('/', PGUserController.getAllPguser);
router.get('/:id',PGUserController.getSinglePguser );
router.put('/:id', PGUserController.updatePguser);
router.delete('/:id', PGUserController.deletePguser);


module.exports = router;
