var express = require('express');
var Lab = require('../models/lab');
var uuidv1 = require('uuid/v1');

exports.addLab = (req,res)=>{
    var id = uuidv1(); 
    var lab = new Lab({
        _id: id,
        labId: id,
        name: req.body.name,
        location: req.body.location,
    });
    lab.save((err)=>{
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

