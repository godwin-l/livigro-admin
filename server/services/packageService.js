var express = require('express');
var Package = require('../models/package');
var uuidv1 = require('uuid/v1');
var esService = require('./esService');
var Test = require('../models/test');

exports.addPackage = (req,res)=>{
    var id = uuidv1(); 

    var package = new Package({
        _id: id,
        packageId:id,
        packageName:req.body.packageName,
        tests: req.body.tests,
        labId: req.body.labId,
        fasting:req.body.fasting,
        price: req.body.price,
        discount: req.body.discount
    });
   
    package.save((err)=>{
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

exports.listPackages = (req,res)=>{
        Package.find({}).populate({
            path:'tests.testId'
          }).sort({sold: -1}).exec(function(err, data){
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
exports.listTopPackages = (req,res)=>{
    Package.find({}).populate({
        path:'tests.testId'
      }).sort({sold: -1}).limit(4).exec(function(err, data){
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

exports.searchPackage = (req,res)=>{
    
    Package.find({packageName:req.body.term}).populate({
        path:'tests.testId'
      }).sort({sold: -1}).exec(function(err, data){
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

exports.addTest= (req,res)=>{
    var id = uuidv1(); 
    var test = new Test({
        _id: id,
        testId:id,
        testName:req.body.name,
        parameters: req.body.parameters,
        labId: req.body.labId,
        fasting:req.body.fasting,
        price: req.body.price,
        discount: req.body.discount
    });
   
    test.save((err)=>{
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

exports.getTests = (req,res)=>{
    Test.find().exec((err,data)=>{
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

exports.searchPackageId = (req,res)=>{
    
    Package.findOne({packageId:req.body.term}).populate({
        path:'tests.testId'
      }).sort({sold: -1}).exec(function(err, data){
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