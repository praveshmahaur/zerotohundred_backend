const {CourseRepo} = require('../repositories');

class courseService {
    async createCourse ({courseName}){
        try{
            const course = await CourseRepo.createCourse({courseName});
            return course;
        }catch(err){
            throw err;
        }

    }
}

module.exports = new courseService();