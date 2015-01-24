var Rebate = require('../models/rebate.js');

var rebateController = {
    getall: function(req, res) {
        Rebate.find({repname: req.body.repname}, function(err, data) {
            if (err)
                console.log('##Error getting users', err);
            else
                res.json(data)
        })
    },
    deleteone: function(req, res) {
        Rebate.remove({name: req.body.quoteid}, function(err){
            if(err)
                console.log('##Delete Error', err)
        })
    },
    update: function(req, res) {

    },
    newrebate: function(req, res) {

    }
};

module.exports = rebateController;