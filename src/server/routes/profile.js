const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

// router.get('/', (req, res, next) => {
//   queries.getItems('profiles', (err, result) => {
//     if (err) {
//       res.status(404).json({
//         error: 'fail'
//       })
//     } else {
//       res.status(200).json({
//         status: 'success',
//         data: result
//       })
//     }
//   })
// });

router.get('/:id', function (req, res, next) {
  let profileID = req.params.id;
  queries.getItems('profiles', function (err, result) {
    if (err) {
      res.json({
        error: err.message || 'Profile not found.'
      })
    } else {
      res.json({
        profile: result
      })
    }
  }, profileID);
});

module.exports = router;
