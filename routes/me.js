const { Router } = require('express');
const auth = require('../middlewares/auth');

const router = Router();

router.get('/me', auth, (req, res) => {
  res.status(200).json({
    firebase: req.user,
    user: req.dbUser,
  });
});

module.exports = router;
