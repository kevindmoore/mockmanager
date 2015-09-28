/**
 * Created by Kevin on 9/7/15.
 */
module.exports = function(req, res, next) {
    var mongoose = require('mongoose');
    var apis = mongoose.model('apis', require('../models/apis'));
    var apidata = mongoose.model('apidata', require('../models/apidata'));
    var url = req.baseUrl;
    if (url.indexOf('/') != -1) {
        url = url.substr(1);
    }
    var bodyData = parseBody(req);
    if (bodyData.username || bodyData.response) {
        addNewAPI(req, url);
        res.send(url + " added to database");
        return;
    }
    apis.findOne({'endpoint' : url}, function(err, api) {
        if (!api) {
            addNewAPI(req, url);
            res.send(url + " added to database");
            return;
        }
        apidata.findOne({'apiId' : api._id}, function(err, apidata) {
            if (err) {
                console.log("Error " + err);
                res.send("Error " + err);
                return;
            }
            if (!apidata) {
                res.send("Could not find api");
                return;
            }
            res.send(apidata.response);
        });

    });
};

/**
 * Parse the body for key/value pairs
 * @param req
 * @returns {{code: *, response: *, type: *, username: *}}
 */
function parseBody(req) {
    var code;
    var response;
    var type;
    var username;
    if (req.body) {
        var body = req.body;
        for (var key in body) {
            if (body.hasOwnProperty(key)) {
                //console.log("key " + key + " value " + body[key]);
                if (key == 'response') {
                    response = body[key];
                }
                if (key == 'response_code') {
                    code = body[key];
                }
                if (key == 'request_type') {
                    type = body[key];
                }
                if (key == 'username') {
                    username = body[key];
                }
            }
        }
    }
    return {code: code, response: response, type: type, username: username};
}


function addNewAPI(req, url) {
    var mongoose = require('mongoose');
    var apis = mongoose.model('apis', require('../models/apis'));
    var apidata = mongoose.model('apidata', require('../models/apidata'));
    var usernames = mongoose.model('usernames', require('../models/usernames'));
    var userresponse = mongoose.model('userresponse', require('../models/userresponse'));
    var currentuser = mongoose.model('currentuser', require('../models/currentuser'));
    var newAPI = new apis({endpoint: url});
    //var Q = require("q");
    var async = require("async");
    if (req.headers) {
        newAPI.headers = JSON.stringify(req.headers);
    }
    var bodyData = parseBody(req);
    var code = bodyData.code;
    var response = bodyData.response;
    var type = bodyData.type;
    var username = bodyData.username;
    var newAPIData;
    var newName;
    var nameId;
    if (type) {
        newAPI.type = type;
    }
    // Remember callback(error, result)
    async.waterfall([
        // First find out if the endpoint already exists
        function(callback) {
            apis.findOne({'endpoint' : url}, callback);
        },
        // If it doesn't save it
        function(api, callback) {
            if (!api) {
                console.log("Saving API");
                newAPI.save(callback);
            } else {
                console.log("Found API id " + api._id);
                newAPI._id = api._id;
                callback(null, newAPI);
            }
        // Now look for the API Data.
        }, function(api, callback) {
            if (code && response) {
                console.log("Looking for API id " + newAPI._id);
                apidata.findOne({apiId: newAPI._id}, callback);
            } // else can't go any further
        // Now either save a new one or go on
        }, function(apiData, callback) {
            if (!apiData ) {
                console.log("Didn't find APIData. Saving APIData");
                newAPIData = new apidata({apiId: newAPI._id, code: code, response: response});
                newAPIData.save(callback);
            } else {
                console.log("Found APIData");
                newAPIData = {_id: apiData._id, apiId: newAPI._id, code: apiData.code, response: apiData.response};
                callback(null, null);
            }
        // Look for the username
        }, function(apiData, callback) {
            if (username) {
                usernames.findOne({name: username}, callback);
            } else {
                callback(null,null);
            }
        // If not found save
        }, function(foundName, callback) {
            if (!foundName && username) {
                newName = new usernames({name: username, apis: []});
                newName.save(callback);
            } else {
                callback(null, foundName);
            }
        // Find the user response
        }, function(savedName, callback) {
            if (savedName) {
                nameId = savedName._id.toString();
            } else {
                nameId = newName._id.toString();
            }
            console.log( 'userId ' + nameId +  ' apiId: ' + newAPI._id +  ' apiDataId ' + newAPIData._id);
            userresponse.findOne({'userId': nameId, 'apiId': newAPI._id, 'apiDataId': newAPIData._id}, callback);
        // If not found, save it, otherwise go on
        }, function(apiResponse, callback) {
            if (!apiResponse) {
                console.log("Didn't find apiResponse. Saving");
                var newUserresponse = new userresponse({userId: nameId, apiId: newAPI._id, apiDataId: newAPIData._id});
                newUserresponse.save(callback);
            } else {
                console.log("User response already exists " + apiResponse);
            }
        }
        ], function(error, result) {
            if (error) console.log(error);
    });

}