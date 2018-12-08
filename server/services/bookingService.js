var express = require('express');
var Booking = require('../models/booking');
var uuidv1 = require('uuid/v1');

exports.bookPackage = (req,res)=>{
    var id = uuidv1();
    var booking = new Booking({
        _id: id,
        bookingId: id,
        userId: req.body.userId,
        packageId: req.body.packageId,
        patients:[{
            name: req.body.name,
            mobile: req.body.mobile,
            address: req.body.address
        }]
    });
    booking.save((err)=>{
        if(err){
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else{
            res.send(
                {
                    status: 'success',
                    code: 200,
                    data: {}
                  }
            );
        }
    });
}


exports.viewBooking = (req,res)=>{
    Booking.find({userId:req.body.userId}).populate({
        path:'packageId'
      }).exec(function(err, data){
    if(err){
        console.log(err)

        res.send({
            status: 'fail',
            data: {}
          });
    }
    else{
        res.send({
        status: 'success',
        code:200,
        data: data
      });
            
            }
        });
}


exports.viewAllbooking = (req,res)=>{
    Booking.find({}).populate({
        path:'packageId'
      }).exec(function(err, data){
    if(err){
        console.log(err)

        res.send({
            status: 'fail',
            data: {}
          });
    }
    else{
        res.send({
        status: 'success',
        code:200,
        data: data
      });
            
            }
        });
}