// models/rebate.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var rebateSchema = mongoose.Schema({
    rebate: []
});

// methods ======================


// create the model for users and expose it to our app
module.exports = mongoose.model('Rebate', rebateSchema);