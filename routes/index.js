const { Router } = require('express');
const meRoutes = require('./me.routes');

const router = Router();

router.use('/me', meRoutes);

module.exports = router;
