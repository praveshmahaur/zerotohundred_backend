const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
    courseName: { type: String}
},{timestamps: true });

module.exports = mongoose.model('Course', CourseSchema);