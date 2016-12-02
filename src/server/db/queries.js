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

exports.postItems = (tableName, callback, object) => {
  knex(tableName)
  .insert(object)
  .returning('*')
  .then(result => callback(null, result))
  .catch(err => callback(err))
}
