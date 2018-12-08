var mongoose = require('mongoose');
var config = require('../config.json');
var connect = config.mongo;
const options = {
  autoIndex: false,
    keepAlive:true,
  socketTimeoutMS: 30000,
  reconnectTries: 30000,
  reconnectInterval: 500, 
  poolSize: 10, 
  bufferMaxEntries: 0,
  useNewUrlParser: true 
};
mongoose.connect(connect,options);
var db = mongoose.connection;
db.on('error', (err)=> {
console.log(err)});
db.once('open', function callback() {
console.log("db connected successfully");
})

module.exports = mongoose;