var express = require('express');
var router = express.Router();
var adminService = require('../services/adminService');
router.post('/login', function (req, res) {
  adminService.login(req,res);
})

router.post('/otplogin', function (req, res) {
    adminService.otpLogin(req,res);
  })
  
  router.post('/verifyotp', function (req, res) {
    adminService.verifyOtp(req,res);
  })



module.exports = router;