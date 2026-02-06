const{notFound,errorresponse,success}= require('./response');
const{userValidators}= require('./userValidators');
const{liveValidators}= require('./liveValidators');
const{subjectValidator}= require('./subjectValidator');
const{courseValidator}= require('./courseValidator');
module.exports={
    userValidators,
    liveValidators,
    subjectValidator,
    success,
    errorresponse,
    notFound,
    courseValidator
}