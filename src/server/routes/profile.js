const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/:id', function (req, res, next) {
  let profileID = req.params.id;
  console.log('route', profileID);
  queries.getItems('profiles', function (err, result) {
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

module.exports = router;
