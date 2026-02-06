const {CourseService} = require('../Service');
const {success,errorresponse} = require('../validators');

class CourseController{
   async createCourse(req,res){
    try{
        const course = await CourseService.createCourse(req.body);
        success(res,course,"Course created successfully");

    }catch(error){
      errorresponse(res,error.message);
    }
   }
}
module.exports = {
  CourseController: new CourseController()
};
