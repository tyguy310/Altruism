const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.post('/go', (req, res, next) => {
  const loginObj = req.body;

  queries.login((err, result) => {
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
  }, loginObj)
});

module.exports = router;
