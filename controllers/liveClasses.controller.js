const {classService} = require('../Service');
const {success,errorresponse} = require('../validators');

class Livecontroller {
  constructor() {
    this.classService = classService;
    this.createLiveClasses = this.createLiveClasses.bind(this);
    this.listLiveClasses = this.listLiveClasses.bind(this);
  }

   async createLiveClasses(data) {
    try{
      const liveclass = await this.classService.createLiveClasses(data);
      success(res,liveclass,"Live class created successfully");
    }catch(error){
      errorresponse(res,error.message);
    }
   }

   async listLiveClasses(req,res) {
    try{
      const liveclasses = await this.classService.listLiveClasses();
      success(res,liveclasses,"Live classes fetched successfully");
    }catch(error){
      errorresponse(res,error.message);
    }
  }
}
module.exports = new Livecontroller();