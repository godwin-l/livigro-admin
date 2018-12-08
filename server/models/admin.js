var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var admin = new Schema({
  _id: String,
  userId: String,
  mobile: String,
  password: {
      type: String,
      "default": ""
  },
  otp: String,
  status: {
      type: Number,
      "default": 100
  },
  createdOn: {
    type: Date,
    "default": Date.now
  }
},
  {
  strict: false
});
module.exports = mongoose.model('admin', admin);
