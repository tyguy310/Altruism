exports.seed = (knex, Promise) => {
  return Promise.all([
    Promise.all([
      knex('accounts').del()
    ])
    .then(() => knex('profiles').del())
    .then(() => knex('helps').del())
    .then(() => knex('reviews').del())

  ])
    .then(() => {
      return Promise.all([
        knex('accounts').insert({ id: 1, username: 'tylerlmaier', password: 'password', email: 'tyler_maier@yahoo.com' }),
        knex('accounts').insert({ id: 2, username: 'Mike', password: 'Hemp', email: 'mikeo@ono.com' }),
        knex('accounts').insert({ id: 3, username: 'Ana', password: 'Zeu', email: 'ana@hotmail.com' })

      ])
    })
    .then(() => {
      return Promise.all([
        knex('profiles').insert({ id: 1, first_name: 'Tyler', last_name: 'Maier', intro: 'Just trying to save the world', img_url: 'http://currentsurroundings.com/content/random/calvin-hobbes/large/calvin_and_hobbes_001.jpg', city: 'Denver', state: 'CO', is_asker: false, is_helper: false, account_id: 1 }),
        knex('profiles').insert({ id: 2, first_name: 'Luis', last_name: 'Vargas', intro: 'Lorem Ipsum', img_url: 'luis@yahoo.com', city: 'Ontario', state: 'CA', is_asker: false, is_helper: false, account_id: 2 }),
        knex('profiles').insert({ id: 3, first_name: 'Mario', last_name: 'Mejia', intro: 'Lorem Ipsum', img_url: 'mario@onos.com', city: 'Santa Barbara', state: 'CA', is_asker: false, is_helper: false, account_id: 3 })

      ])
    })
    .then(() => {
      return Promise.all([
        knex('helps').insert({ id: 1, asker_id: 1, helper_id: 2, description: 'This is a description of the help', subject: 'Subject', type: 'onsite', address: '1000 Bob Road', city: 'San Diego', state: 'CA', zip: '90210', start_time: '00:00', end_time: '04:00' }),
        knex('helps').insert({ id: 2, asker_id: 2, helper_id: 3, description: 'This is a description of the help', subject: 'Subject', type: 'onsite', address: '1000 Bob Road', city: 'San Diego', state: 'CA', zip: '90210', start_time: '00:00', end_time: '04:00' }),
        knex('helps').insert({ id: 3, asker_id: 1, helper_id: 2, description: 'This is a description of the help', subject: 'Subject', type: 'online', address: '', city: '', state: '', zip: '', start_time: '00:00', end_time: '04:00' })
      ]);
    })
    .then(() => {
      return Promise.all([
        knex('reviews').insert({ id: 1, reviewer_id: 3, reviewed_id: 1, description: 'IDK', rating: 5 }),
        knex('reviews').insert({ id: 2, reviewer_id: 2, reviewed_id: 3, description: 'Yeah', rating: 4 }),
        knex('reviews').insert({ id: 3, reviewer_id: 3, reviewed_id: 1, description: 'No', rating: 5 })
      ]);
    })
};
