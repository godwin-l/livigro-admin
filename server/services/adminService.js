var express = require('express');
var Admin = require('../models/admin');
var config = require('../config.json');
var msg91 = require('msg91-sms');
var msg91api    = config.msg91api;
var msg91senderId    = config.msg91senderid;
var msg91dialcode = config.msg91dialcode;
var msg91route = config.msg91route;
var notifier = require('node-notifier');
var path = require('path');

var uuidv1 = require('uuid/v1');
exports.login = (req,res)=>{
    Admin.findOne({mobile:req.body.mobile,password:req.body.password},(err,data)=>{
        if(err){
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else
        {
            if(data == null)
            {
                res.send({
                    status: 'login fail',
                    data: {}
                  });
                  notifier.notify(
                    {
                      title: 'Livigro Authentication Failed',
                      message: 'Incorrect Mobile number or Password',
                      icon: path.join(__dirname, '/assets/images/logo.png'), 
                      sound: true, 
                      wait: true 
                    },
                    function(err, response) {
                    }
                  );
            }
        else
        {
            res.send({
                status: 'success',
                data: data
              });
        }
        }
    });
}

exports.verifyOtp = (req,res)=>{

    Admin.findOne({mobile:req.body.mobile,otp:req.body.otp},(err,data)=>{
        if(err){
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else{
            if(data){
                res.send({
                    status: 'success',
                    code:200,
                    data: data
                  });
            }
            else{
                res.send({
                    status: 'wrong',
                    code:200,
                    data: {}
                  });
                  notifier.notify(
                    {
                      title: 'Livigro Wrong OTP',
                      message: 'Incorrect One Time Password',
                      icon: path.join(__dirname, '/assets/images/logo.png'), 
                      sound: true, 
                      wait: true 
                    },
                    function(err, response) {
                    }
                  );
            }
        }
    });

}



exports.resendOtp = ()=>{
    Admin.findOne({mobile:req.body.mobile},(err,data)=>{
        if(err){
            res.send({
                status: 'fail',
                data: {}
              });
        }
        else
        {
            res.send(
                {
                    status: 'success',
                    code: 200,
                    data: {}
                  }
            );
            var number= req.body.mobile;
            var message= "Your Livigro Registeration OTP is " + data.otp;
            var senderid= msg91senderId;
            var route= msg91route;
            var dialcode= msg91dialcode;
            msg91.sendOneandGetJson(msg91api,number,message,senderid,route,dialcode,function(response){
                console.log(response);
                 
                });
        }
    });
}







exports.otpLogin = (req,res)=>{
    var id = uuidv1();
    var otp = Math.random()*10000;
    otp = otp.toString();
    otp = otp.slice(0,otp.indexOf('.'));
    Admin.updateOne({mobile: req.body.mobile},{otp:otp},(err,data)=>{
        if(err){
            res.send({
                status: 'fail',
                code:404,
                data: {}
              });
        }
        else{
            if(data.nModified != 0){
        
                    res.send({
                        status: 'fail',
                        code: 200,
                        data: data
                      });  
                  var number= req.body.mobile;
                  var message= "Your Livigro OTP is " + otp;
                  var senderid= msg91senderId;
                  var route= msg91route;
                  var dialcode= msg91dialcode;
                  msg91.sendOneandGetJson(msg91api,number,message,senderid,route,dialcode,function(response){
                      console.log(response);
                       
                      });
            }
            else{
                var user = new User({
                    _id: id,
                    userId: id,
                    mobile: req.body.mobile,
                    otp: otp
                });
                user.save((err)=>{
                    if(err){
                        res.send({
                            status: 'fail',
                            code:404,
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
                        var number= req.body.mobile;
                        var message= "Your Livigro Registeration OTP is " + otp;
                        var senderid= msg91senderId;
                        var route= msg91route;
                        var dialcode= msg91dialcode;
                        msg91.sendOneandGetJson(msg91api,number,message,senderid,route,dialcode,function(response){
                            console.log(response);
                             
                            });
                        
                    }
                });
            }
        }
    });
    
}