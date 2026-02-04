const SubjectNote = require('../models/SubjectNote');
const {subjectService} = require('../Service');
const {success, errorresponse} = require('../validators/response');


class SubjectNotesController {
  constructor(){
    this.subjectService = subjectService;
    this.createSubjectNote = this.createSubjectNote.bind(this);
    this.listSubjectNotes = this.listSubjectNotes.bind(this);
  }

  async createSubjectNote(req, res) {
    try{
      const subjectNote = await this.subjectService.createSubjectNotes(req.body);
      success(res,subjectNote,"Subject note created successfully");
    }catch(error){
      errorresponse(res,error.message);
    }
  }

  async listSubjectNotes(req, res) {
    try{
      const subjectNotes = await this.subjectService.listSubjectNotes();
      success(res,subjectNotes,"Subject notes fetched successfully");
    }catch(error){
      errorresponse(res,error.message);
    }
  }
}
module.exports = new SubjectNotesController();