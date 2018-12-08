var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var lab = new Schema({
  _id: String,
  labId: String,
  name: String,
  location: Schema.Types.Mixed, 
  createdOn: {
    type: Date,
    "default": Date.now
  }
},
  {
  strict: false
});
module.exports = mongoose.model('lab', lab);