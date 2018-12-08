var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var test = new Schema({
    _id: String,
    testId: String,
    testName: String,
    parameters: Schema.Types.Mixed,
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
module.exports = mongoose.model('test', test);