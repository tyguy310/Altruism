const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('login', {user: req.user, error: req.flash('error')});
});

router.post('/', passport.authenticate('local', { failureRedirect: '/login', failureFlash: true }), (req, res, next) => {
  req.session.save((err) => {
    if (err) {
      return next(err);
    }
    res.redirect('/');
  });
});

module.exports = router;
