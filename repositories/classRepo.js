const user = require('../models/LiveClasses');

class LiveClassesRepo {
    async createClass(data){
        return await user.create(data);
    }

    async listClasses(){
        await user.find();
    }
}

module.exports = new LiveClassesRepo();