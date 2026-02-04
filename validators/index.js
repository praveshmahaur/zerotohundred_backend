const{notFound,errorresponse,success}= require('./response');
const{userValidators}= require('./userValidators');
const{liveValidators}= require('./liveValidators');
const{subjectValidator}= require('./subjectValidator');
module.exports={
    userValidators,
    liveValidators,
    subjectValidator,
    success,
    errorresponse,
    notFound
}