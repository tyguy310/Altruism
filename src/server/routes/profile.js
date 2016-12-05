const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/:id', (req, res, next) => {
  let profileID = req.params.id;

  queries.getProfile((err, result) => {
    if (err) {
      res.status(404).json({
        error: err.message || 'Please create a profile'
      })
    } else {
      res.json({
        profile: result[0],
        helps: result[1],
        asks: result[2]
      })
    }
  }, profileID)
})

router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  let accountType = req.body.accountType;

  queries.updateAccount(id, (err, result) => {
    if (err) {
      res.status(404).json({err: err.message || 'nice try'})
    } else {
      res.json({
        profile: result
      })
    }
  }, accountType)
});

module.exports = router;
