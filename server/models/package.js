var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var package = new Schema({
    _id: String,
    packageId: String,
    packageName: String,
    tests: [{
        testId: {
          type: String,
          ref: 'test'
        }
      }],
    consultation: String,
    Sold: {
        type: Number,
        "default": 0
    },
    labId: Array,
    fasting: Number,
    price: Number,
    discount: Number,
    createdOn: {
        type: Date,
        "default": Date.now
    }
}, {
    strict: false
});
module.exports = mongoose.model('package', package);