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
        help: result
      })
    }
  })
});

router.get('/:id', (req, res, next) => {
  let helpID = req.params.id;
  queries.getItems('helps', (err, result) => {
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

router.post('/', (req, res, next) => {
  let helpObj = req.body;

  queries.postItems('helps', (err, result) => {
    if (err) {
      res.json({
        error: err.message || 'Check your form'
      })
    } else {
      res.json({
        help: result
      })
    }
  }, helpObj)
});

module.exports = router;
