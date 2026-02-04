const { Router } = require('express');
const {
  createSubjectNote,
  listSubjectNotes,
} = require('../controllers/subjectNotes.controller');
const{subjectValidator} = require('../validators');
const router = Router();

router.post('/', subjectValidator, createSubjectNote);
router.get('/', listSubjectNotes);

module.exports = router;
