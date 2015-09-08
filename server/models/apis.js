var mongoose = require('mongoose');

// Create the UserNameSchema.
var APISchema = new mongoose.Schema({
    endpoint: {
        type: String,
        required: true
    },
    type: String,
    headers: String
});

// Export the model schema.
module.exports = APISchema;
