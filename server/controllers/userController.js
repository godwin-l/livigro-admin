var express = require('express');
var router = express.Router();
var userService = require('../services/userService');
router.post('/login', function (req, res) {
  userService.login(req,res);
})

router.post('/register', function (req, res) {
  userService.register(req,res);
})

router.post('/otplogin', function (req, res) {
  userService.otpLogin(req,res);
})

router.post('/verifyotp', function (req, res) {
  userService.verifyOtp(req,res);
})

router.post('/registeruser', function (req, res) {
  userService.registerVerifiedUser(req,res);
})

router.get('/resendotp', function (req, res) {
  userService.resendOtp(req,res);
})

router.post('/editprofile', function (req, res) {
  userService.editProfile(req,res);
})

router.post('/viewprofile', function (req, res) {
  userService.viewProfile(req,res);
})

module.exports = router;