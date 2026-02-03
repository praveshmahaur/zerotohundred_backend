const { Router } = require('express');
const {
  createLiveClasses,
  listLiveClasses,
} = require('../controllers/liveClasses.controller');

const router = Router();

router.post('/', createLiveClasses);
router.get('/', listLiveClasses);

module.exports = router;
