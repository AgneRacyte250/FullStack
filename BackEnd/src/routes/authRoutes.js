var express = require('express');
var authController = require('../controller/authController');

var router = express.Router();

router.post('/signup', authController.signup);
router.post('/signin', authController.signin);
router.post('/signout', authController.signout);

module.exports = router;
