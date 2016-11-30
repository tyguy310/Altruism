const knex = require('./knex');

exports.getItems = (tableName, callback, itemId) => {
  if (itemId) {
    knex(tableName)
    .where('id', itemId)
    .then(result => {
      if (result.length) {
        callback(null, result);
      } else {
        callback(1)
      }
    }).catch(err => callback(err));
  } else {
    knex(tableName)
    .then(results => callback(null, results))
    .catch(err => callback(err));
  }
};
