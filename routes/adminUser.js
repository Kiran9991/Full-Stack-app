const express = require('express');

const adminController = require('../controllers/user')

const router = express.Router();

//Post request
router.post('/add-user', adminController.postAddUser);

module.exports = router;