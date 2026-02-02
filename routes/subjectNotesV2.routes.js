const { Router } = require('express');
const {
  createSubjectNote,
  listSubjectNotes,
} = require('../controllers/subjectNotes.controller');

const router = Router();

router.post('/', createSubjectNote);
router.get('/', listSubjectNotes);

module.exports = router;
