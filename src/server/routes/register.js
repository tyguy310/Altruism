const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
  res.status(200).json({status: 'success'});
});

router.post('/go', (req, res, next) => {
  queries.postItems('accounts', (err, result) => {
    if (err) {
      res.json({
        routeError: err.message || 'Profile not found.'
      })
    } else {
      res.json({
        account: result
      })
    }
  }, req.body);
});

module.exports = router;
