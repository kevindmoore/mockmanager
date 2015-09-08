var mongoose = require('mongoose');

// Create the CurrentUserSchema.
var CurrentUserSchema = new mongoose.Schema({
    userId: String,
    name: String
});

// Export the model schema.
module.exports = CurrentUserSchema;
