var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
    std_id: {
        type: String,
        unique: true
    },
    first_name: {
        type: String
    },
    last_name: {
        type: String
    },
    password: {
        type: String
    },
});

module.exports = mongoose.model('users', UserSchema);