const Course = require('../models/courses');

class CourseRepo{
    async createCourse(data){
        return await Course.create(data);
    }
}
module.exports = new CourseRepo();