const { Router } = require('express');
const auth = require('../middlewares/auth');
const { getMe } = require('../controllers/me.controller');

const router = Router();

router.get('/', auth, getMe);

module.exports = router;
