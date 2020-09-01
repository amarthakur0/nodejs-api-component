const express = require('express'),
  router = express.Router(),
  reqlib = require('app-root-path').require,
  auth = reqlib('/middlewares/auth');

router.get('/', (req, res, next) => {
  res.send('Welcome to Node JS API Template');
});

// Auth Token based API
router.use('/user', reqlib('/components/user'));
router.use('/book', auth, reqlib('/components/book'));

module.exports = router;