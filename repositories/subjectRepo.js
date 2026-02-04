const user = require('../models/SubjectNote');


class subjectRepo{
     async createSubjectNote(data){
        return await user.create(data);
    }

    async listSubjectNotes(){
        return await user.find({});
    }
    
}
module.exports=new subjectRepo();


