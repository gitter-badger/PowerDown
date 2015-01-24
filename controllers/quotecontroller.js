var Quote = require('../models/quote.js');

var quoteController = {
    getall: function(req, res) {
        Quote.find({repname: req.body.repname}, function(err, data) {
            if (err)
                console.log('##Error getting users', err);
            else
                res.json(data)
        })
    },
    deleteone: function(req, res) {
        Quote.remove({name: req.body.quoteid}, function(err){
            if(err)
                console.log('##Delete Error', err)
        })
    },
    update: function(req, res) {

    },
    newquote: function(req, res) {

    }
};

module.exports = quoteController;