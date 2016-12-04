const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/:id', (req, res, next) => {
  let profileID = req.params.id;
  console.log('route', profileID);
  queries.getItems('profiles', (err, result) => {
    if (err) {
      res.status(404).json({
        error: err.message || 'Please create a profile'
      })
    } else {
      res.json({
        profile: result
      })
    }
  }, profileID);
});

router.put('/:id', (req, res, next) => {
  let id = req.params.id;
  let accountType = req.body.
  queries.updateAccount(id, (err, result) => {
    if (err) {
      res.status(404).json({err: err.message || 'nice try'})
    } else {
      res.json({
        profile: result
      })
    }
  })
});

module.exports = router;
