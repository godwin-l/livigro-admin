var express = require('express');
var router = express.Router();
var packageService = require('../services/packageService');
router.post('/addpackage', function (req, res) {
  packageService.addPackage(req,res);
})

router.get('/listpackages', function (req, res) {
    packageService.listPackages(req,res);
  })
  router.get('/listtoppackages', function (req, res) {
    packageService.listTopPackages(req,res);
  })

  router.post('/searchpackage', function (req, res) {
    packageService.searchPackage(req,res);
  })

  router.post('/searchpackageid', function (req, res) {
    packageService.searchPackageId(req,res);
  })

  router.post('/addtest', function (req, res) {
    packageService.addTest(req,res);
  })

  router.get('/gettests', function (req, res) {
    packageService.getTests(req,res);
  })

module.exports = router;