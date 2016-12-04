const express = require('express');
// const passport = require('passport');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { user: req.user });
});

router.get('/ping', (req, res) => {
  res.status(200).send('pong!');
});

module.exports = router;
