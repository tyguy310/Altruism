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

// router.get('/', function (req, res, next) {
//   queries.getItems('sports', function (err, result) {
//     if (err) {
//       res.json({
//         error: err.message || 'An error occurred, please try again'
//       });
//     } else {
//       res.json({
//         sports: result
//       });
//     }
//   });
// });
//
// router.get('/:id', function (req, res, next) {
//   let sportId = req.params.id;
//   queries.getItems('sports', function (err, result) {
//     if (err) {
//       res.json({
//         error: err.message || 'Sport not found.'
//       });
//     } else {
//       res.json({
//         sport: result
//       });
//     }
//   }, sportId);
// });

module.exports = router;
