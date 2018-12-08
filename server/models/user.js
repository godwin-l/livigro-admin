var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var user = new Schema({
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
  },
  city: {
    type: String,
    "default": ""
},
  dob: {
    type: String,
    "default": ""
},
  door: {
    type: String,
    "default": ""
},
  email: {
    type: String,
    "default": ""
},
  gender: {
    type: String,
    "default": ""
},
  name: {
    type: String,
    "default": ""
},
  postcode: {
    type: String,
    "default": ""
},
  street: {
    type: String,
    "default": ""
}
},
  {
  strict: false
});
module.exports = mongoose.model('user', user);
