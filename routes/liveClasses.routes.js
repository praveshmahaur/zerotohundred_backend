const { Router } = require('express');
const {
  createLiveClasses,
  listLiveClasses,
} = require('../controllers/liveClasses.controller');

const {liveValidators} = require('../validators');

const router = Router();

router.post('/', liveValidators, createLiveClasses);
router.get('/', listLiveClasses);

module.exports = router;
