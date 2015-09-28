var mongoose = require('mongoose');

// Create the UserNameSchema.
var UserNameSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    apis: [{id: String}]
});

// Export the model schema.
module.exports = UserNameSchema;
