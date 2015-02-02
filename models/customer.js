// models/customer.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var customerSchema = mongoose.Schema({
    custname: {type: String, required: true, unique: true},
    custcontact: {type: String, required: true},
    custaddress: {type: String, required: true},
    custaddress2: {type: String},
    custphone: {type: String, required: true},
    custcity: {type: String, required: true},
    custstate: {type: String, required: true},
    custzip: {type: String, required: true},
    custenergyco: {type: String, required: true},
    custenergyrate: {type: String},
    custnonprofit: {type: Boolean, required: true}
});

// methods ======================


// create the model for users and expose it to our app
module.exports = mongoose.model('Customer', customerSchema);