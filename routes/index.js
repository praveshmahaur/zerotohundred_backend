const { Router } = require('express');
const meRoutes = require('./me.routes');
const subjectNotesRoutes = require('./subjectNotesV2.routes');
const liveClassRoutes = require('./liveClasses.routes');
const courseRoutes = require('./Course.routes');
const router = Router();

router.use('/me', meRoutes);
router.use('/subject-notes', subjectNotesRoutes);
router.use('/live-classes', liveClassRoutes);
router.use('/course',courseRoutes);

module.exports = router;
