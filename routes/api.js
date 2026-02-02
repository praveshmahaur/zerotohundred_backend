const { Router } = require('express');
const meRoutes = require('./me.routes');
const subjectNotesRoutes = require('./subjectNotesV2.routes');

const router = Router();

router.use('/me', meRoutes);
router.use('/subject-notes', subjectNotesRoutes);

module.exports = router;
