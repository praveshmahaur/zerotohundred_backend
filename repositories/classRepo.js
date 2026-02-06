const user = require('../models/LiveClasses');

class LiveClassesRepo {
    async createClass(data){
}

    async listClasses(){
        await user.find().lean();
    }
}      
    

module.exports = new LiveClassesRepo();