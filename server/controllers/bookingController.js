var express = require('express');
var router = express.Router();
var bookingService = require('../services/bookingService');

router.post('/bookpackage', function (req, res) {
    bookingService.bookPackage(req,res);
})

router.post('/viewbooking', function (req, res) {
    bookingService.viewBooking(req,res);
})

router.get('/viewallbooking', function (req, res) {
    bookingService.viewAllbooking(req,res);
})

module.exports = router;