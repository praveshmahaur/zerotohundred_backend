const { Subjectrepo } = require("../repositories");

class subjectService {
  async createSubjectNotes({
    title,
    description,
    subjectName,
    numberOfNotes,
    noteUrl,
    imageUrl,
  }) 
  {
    try {
      const notes = await Subjectrepo.createSubjectNote({
        title,
        description,
        subjectName,
        numberOfNotes,
        noteUrl,
        imageUrl,
      });
      return notes;
    } catch (err) {
      throw err;
    }
  }

  async listSubjectNotes() {
    try{
        return await Subjectrepo.listSubjectNotes();
    }catch(err){
        throw err;
    }
  }

}

module.exports = new subjectService();
