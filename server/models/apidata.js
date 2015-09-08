var mongoose = require('mongoose');

// Create the UserNameSchema.
var APIDataSchema = new mongoose.Schema({
    apiId: String,
    code: Number,
    response: String
});

// Export the model schema.
module.exports = APIDataSchema;
