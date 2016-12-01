const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res, next) => {
  queries.getItems('helps', (err, result) => {
    if (err) {
      res.status(404).json({
        error: 'fail'
      })
    } else {
      res.status(200).json({
        status: 'success',
        data: result
      })
    }
  })
});

router.get('/:id', function (req, res, next) {
  let helpID = req.params.id;
  queries.getItems('helps', function (err, result) {
    if (err) {
      res.json({
        error: err.message || 'Help not found.'
      })
    } else {
      res.json({
        help: result
      })
    }
  }, helpID);
});

module.exports = router;
