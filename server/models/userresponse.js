var mongoose = require('mongoose');

// Create the UserNameSchema.
var UserResponseSchema = new mongoose.Schema({
    userId: String,
    apiId: String,
    apiDataId: String
});

// Export the model schema.
module.exports = UserResponseSchema;
