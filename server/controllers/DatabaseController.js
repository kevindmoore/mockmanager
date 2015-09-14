/**
 * Created by Kevin on 9/7/15.
 */
module.exports = function(req, res, next) {
    var mongoose = require('mongoose');
    var apis = mongoose.model('apis', require('../models/apis'));
    var usernames = mongoose.model('usernames', require('../models/usernames'));
    var apidata = mongoose.model('apidata', require('../models/apidata'));
    var userresponse = mongoose.model('userresponse', require('../models/userresponse'));
    var currentuser = mongoose.model('currentuser', require('../models/currentuser'));
    var url = req.baseUrl;
    if (url.indexOf('/') != -1) {
        url = url.substr(1);
    }
    apis.findOne({'endpoint' : url}, function(err, api) {
        if (!api) {
            next();
            return;
        }
        console.log('Found EndPoint ' + api);
        console.log('ID ' + api._id);
        apidata.findOne({'apiId' : api._id}, function(err, apidata) {
            if (err) {
                console.log("Got an error");
                console.log(err);
                next();
                return;
            }
            console.log("Didn't get an error");
            res.send(apidata.response);
        });

    });
    //console.log('Logging URL ' + req.baseUrl + ' path ' + req.path);
    //res.send("{status:ok}");
};
