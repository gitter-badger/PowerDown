// models/rebate.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var quoteSchema = mongoose.Schema({
    quoteid: {type: String, required: true, unique: true},
    repname: {type: String, required: true},
    email: {type: String, required: true},
    customer: {type: String, required: true}
});

// methods ======================


// create the model for users and expose it to our app
module.exports = mongoose.model('Quote', quoteSchema);