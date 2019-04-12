var mongoose = require('mongoose');

var FacultySchema = mongoose.Schema({
    faculty_id: {
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
    }
});

module.exports = mongoose.model('faculties', FacultySchema);