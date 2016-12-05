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
}

exports.getProfile = (callback, profileId) => {
  return Promise.all([
    knex('profiles').where('id', profileId),
    knex('helps').where('helper_id', profileId),
    knex('helps').where('asker_id', profileId)
  ])
  .then(data => callback(null, data))
  .catch(err => callback(err))
}

exports.postItems = (tableName, callback, object) => {
  knex(tableName)
  .insert(object)
  .returning('*')
  .then(result => callback(null, result))
  .catch(err => callback(err))
}

exports.login = (callback, loginObj) => {
  const username = loginObj.username;
  const password = loginObj.password;
  const email = loginObj.email;

  if (username) {
    knex('accounts')
    .returning('accounts.id')
    .where({ 'username': username, 'password': password })
    .then(result => callback(null, result))
    .catch(err => callback(err));
  } else if (email) {
    knex('accounts')
    .returning('accounts.id')
    .where({ 'email': email, 'password': password })
    .then(result => callback(null, result))
    .catch(err => callback(err));
  }
}

exports.updateAccount = (id, callback, accountType) => {
  if (accountType === 'is_helper') {
    knex('profiles')
    .returning('*')
    .where('id', id)
    .update('is_helper', true)
    .then(result => callback(null, result))
    .catch(err => callback(err));
  } else if (accountType === 'is_asker') {
    knex('profiles')
    .where('id', id)
    .update('is_asker', true)
    .then(result => callback(null, result))
    .catch(err => callback(err));
  }
}
