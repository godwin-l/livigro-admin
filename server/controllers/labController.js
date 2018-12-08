var express = require('express');
var router = express.Router();
var labService = require('../services/labService');
router.post('/addlab', function (req, res) {
  labService.addLab(req,res);
})



module.exports = router;