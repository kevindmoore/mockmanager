/**
 * Created by Kevin on 9/7/15.
 */
module.exports = function(req, res, next) {
    var mongoose = require('mongoose');
    var apis = mongoose.model('apis', require('../models/apis'));
    var url = req.baseUrl;
    if (url.indexOf('/') != -1) {
        url = url.substr(1);
    }
    apis.findOne({'endpoint' : url}, function(err, api) {
        console.log('Found EndPoint ' + api);

    });
    console.log('Logging URL ' + req.baseUrl + ' path ' + req.path);
        next();
};
