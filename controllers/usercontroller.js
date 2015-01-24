var User = require('../models/user.js');

var userController = {
    getall: function(req, res) {
        User.find({}, function(err, data) {
            if (err)
                console.log('##Error getting users', err);
            else
                res.json(data)
        })
    },
    deleteone: function(req, res) {
        User.remove({email: req.body.email}, function(err){
            if(err)
                console.log('##Delete Error', err)
        })
    },
    resetpass: function(req, res) {
        User.update({email: req.body.email}, {$set: {password: req.body.password}}, function(err){
            if(err)
                console.log('##Error Password Reset', err)
        })
    }
};

module.exports = userController;