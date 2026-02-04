const { ClassRepo } = require("../repositories");

class classService {
  async createLiveClasses({ title, subTitle, subjectName, time, url }) {
    try {
      const classes = await ClassRepo.createClass({
        title,
        subTitle,
        subjectName,
        time,
        url,
      });
      return classes;
    } catch (err) {
      throw err;
    }
  }

  async listLiveClasses() {
    try {
      return await ClassRepo.listClasses();
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new classService();
