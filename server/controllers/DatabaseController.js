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
    var Q = require("q");
    if (req.headers) {
        newAPI.headers = JSON.stringify(req.headers);
    }
    var bodyData = parseBody(req);
    var code = bodyData.code;
    var response = bodyData.response;
    var type = bodyData.type;
    var username = bodyData.username;
    var newAPIData;
    if (type) {
        newAPI.type = type;
    }
    var promise1 = apis.findOne({'endpoint' : url});
    //Q.all([promise1]).done(function(values) {
    promise1.then(function(api) {
        if (!api) {
            console.log("Saving API");
            return newAPI.save();
        } else {
            console.log("Found API id " + api._id);
            newAPI._id = api._id;
        }
    }).then(function() {
        if (code && response) {
            newAPIData = new apidata({apiId: newAPI._id, code: code, response: response});
            console.log("Looking for API id " + newAPI._id);
            return apidata.findOne({apiId: newAPI._id});
        }

    }).then(function(apidata) {
        if (!apidata) {
            console.log("Didn't find APIData. Saving APIData");
            newAPIData.save(function (err) {
                if (err) console.log('Error saving NewAPIData  ' + err);
            });
        } else {
            console.log("Found APIData");
            newAPIData = apidata;
        }
    });
/*
    Q.fcall(promise1).then(function(api) {
        console.log("Found api " + api);

    }).catch(function(error) {
        console.log("Error " + error);

    }).done();
*/

    /*
    apis.findOne({'endpoint' : url}, function(err, api) {
        if (!api || err) {
            if (err) console.log("Error getting apis " + err);
            console.log("Saving API");
            newAPI.save(function (err) {
                if (err) console.log('Error saving newAPI  ' + err);
            });
        } else {
            console.log("Found API id " + api._id);
            newAPI._id = api._id;
        }
    });
    var newAPIData;
    if (code && response) {
        newAPIData = new apidata({apiId: newAPI._id, code: code, response: response});
        console.log("Looking for API id " + newAPI._id);
        apidata.findOne({apiId: newAPI._id}, function (err, apidata) {
            if (!apidata || err) {
                if (err) console.log("Error getting APIData " + err);
                console.log("Didn't find APIData. Saving APIData");
                newAPIData.save(function (err) {
                    if (err) console.log('Error saving NewAPIData  ' + err);
                });
            } else {
                console.log("Found APIData");
                newAPIData = apidata;
            }
        });
    }
    if (username) {
        usernames.findOne({'name': username}, function (err, foundName) {
            var nameId;
            if (!foundName || err) {
                var newName = new usernames({name: username, apis: []});
                newName.save(function (err) {
                    if (err) console.log('Error saving newName  ' + err);
                });
                nameId = newName._id;
            } else {
                nameId = foundName._id;
            }
            var newUserresponse = new userresponse({userId: nameId, apiId: newAPI._id, apiDataId: newAPIData._id});
            userresponse.findOne({
                userId: nameId,
                apiId: newAPI._id,
                apiDataId: newAPIData._id
            }, function (err, apiResponse) {
                if (err || !apiResponse) {
                    if (err) console.log("Error getting userresponse " + err);
                    console.log("Didn't find apiResponse. Saving");
                    newUserresponse.save(function (err) {
                        if (err) console.log('Error saving newUserresponse  ' + err);
                    });
                } else {
                    console.log("User response already exists " + newUserresponse);

                }
            });
        });
    }
    */
}