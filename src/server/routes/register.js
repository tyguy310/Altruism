const express = require('express');
const passport = require('passport');
const Account = require('../models/account');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('register', { });
});

router.post('/', (req, res, next) => {
  Account.register(new Account({ username: req.body.username }), req.body.password, (err, account) => {
    if (err) {
      return res.render('register', { error: err.message });
    }

    passport.authenticate('local')(req, res, () => {
      req.session.save((err) => {
        if (err) {
          return next(err);
        }
        res.redirect('/');
      });
    });
  });
});

module.exports = router;
