var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var db = require('./server/db/mongoose');
var elastic = require('./server/db/elastic');
var user = require('./server/controllers/userController');
var booking = require('./server/controllers/bookingController');
var admin = require('./server/controllers/adminController');
var lab = require('./server/controllers/labController');
var package = require('./server/controllers/packageController');
var notifier = require('node-notifier');



var app = express();
var port = process.env.PORT || 80;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/livigro')));
app.use('/', express.static(path.join(__dirname, 'dist/livigro')));

app.use('/api/user',user);
app.use('/api/booking',booking);
app.use('/api/lab',lab);
app.use('/api/package',package);
app.use('/api/admin',admin);







app.listen(port,()=>{
  console.log("Listening on localhost")
});

module.exports = app;
