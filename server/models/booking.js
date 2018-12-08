var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var booking = new Schema({
  _id: String,
  bookingId: String,
  userId: String,
  packageId: String,
  patients:[{
      name: String,
      mobile: String,
      address: String
  }] ,
  createdOn: {
    type: Date,
    "default": Date.now
  }
},
  {
  strict: false
});
module.exports = mongoose.model('booking', booking);