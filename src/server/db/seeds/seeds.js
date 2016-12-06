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
        knex('helps').insert({ id: 1, asker_id: 3, description: 'I need help building and outfitting a greenhouse. Looking for basic carpentry skills and ability to lift about 50 pounds. Will also need help potting plants. Please bring work gloves if desired', subject: 'Labor', type: 'onsite', address: '1000 Bob Road', city: 'Denver', state: 'CO', zip: '80209', start_time: '00:00', end_time: '12:00', duration: 12 }),
        knex('helps').insert({ id: 2, asker_id: 2, description: 'Help me build a fence to keepp the gators out of my yard', subject: 'Labor', type: 'onsite', address: '1000 Beach Boulevard', city: 'Miami', state: 'FL', zip: '12345', start_time: '00:00', end_time: '05:00', duration: 5 }),
        knex('helps').insert({ id: 3, asker_id: 2, helper_id: 2, description: 'Help me with my apple orchard harvest. About 5 days worth of help needed', subject: 'Labor', type: 'onsite', address: '1234 City Road', city: 'Minneapolis', state: 'MN', zip: '', start_time: '00:00', end_time: '04:00', duration: 40 }),
        knex('helps').insert({ id: 4, asker_id: 3, description: 'TEACH ME HOW TO TIE MY SHOES!', subject: 'Tutor', type: 'online', address: '', city: '', state: '', zip: '', start_time: '00:00', end_time: '04:00', duration: 1 }),
        knex('helps').insert({ id: 5, asker_id: 1, description: 'I am a beginning surfer looking for a surf buddy/teacher just to help me stand up for the first time', subject: 'Tutor', type: 'onsite', address: 'Ocean Beach', city: 'San Diego', state: 'CA', zip: '12345', start_time: '00:00', end_time: '02:00', duration: 2 }),
        knex('helps').insert({ id: 6, asker_id: 2, description: 'Help my kids get started in web development. They have expressed interest but I know nothing about computers!', subject: 'Tutor', type: 'online', address: '', city: '', state: '', zip: '', start_time: '00:00', end_time: '04:00', duration: 2 }),
        knex('helps').insert({ id: 7, asker_id: 3, helper_id: 1, description: 'Can anyone explain Object-Oriented Programming', subject: 'Subject', type: 'online', address: '', city: '', state: '', zip: '', start_time: '00:00', end_time: '04:00', duration: 3 }),
        knex('helps').insert({ id: 8, asker_id: 3, description: 'Looking to self-publish a novel and need an editorial wizard to edit a draft', subject: 'Service', type: 'online', address: '', city: '', state: '', zip: '', start_time: '00:00', end_time: '04:00', duration: 4 }),
        knex('helps').insert({ id: 9, asker_id: 2, description: 'Looking for a kindly neighbor to help my grandmother cross the street', subject: 'Care', type: 'onsite', address: '', city: 'Denver', state: 'CO', zip: '80209', start_time: '00:00', end_time: '01:00', duration: 1 }),
        knex('helps').insert({ id: 10, asker_id: 2, helper_id: 3, description: 'This is a description of the help requested', subject: 'Subject', type: 'onsite', address: '1000 Bob Road', city: 'Miami', state: 'FL', zip: '12345', start_time: '00:00', end_time: '04:00', duration: 20 }),
        knex('helps').insert({ id: 11, asker_id: 2, helper_id: 2, description: 'This is a description of the help requested', subject: 'Subject', type: 'onsite', address: '1234 City Road', city: 'City', state: 'State', zip: '', start_time: '00:00', end_time: '04:00', duration: 8 }),
        knex('helps').insert({ id: 12, asker_id: 3, description: 'This is a description of the help requested', subject: 'Subject', type: 'online', address: '', city: '', state: '', zip: '', start_time: '00:00', end_time: '04:00', duration: 240 }),
        knex('helps').insert({ id: 13, asker_id: 2, helper_id: 2, description: 'This is a description of the help requested', subject: 'Subject', type: 'onsite', address: '1000 Bob Road', city: 'San Diego', state: 'CA', zip: '12345', start_time: '00:00', end_time: '04:00', duration: 2 }),
        knex('helps').insert({ id: 14, asker_id: 2, helper_id: 3, description: 'This is a description of the help requested', subject: 'Subject', type: 'onsite', address: '1000 Bob Road', city: 'San Diego', state: 'CA', zip: '12345', start_time: '00:00', end_time: '04:00', duration: 7 }),
        knex('helps').insert({ id: 15, asker_id: 3, helper_id: 2, description: 'This is a description of the help requested', subject: 'Subject', type: 'online', address: '', city: '', state: '', zip: '', start_time: '00:00', end_time: '04:00', duration: 5 }),
        knex('helps').insert({ id: 16, asker_id: 2, description: 'This is a description of the help requested', subject: 'Subject', type: 'online', address: '', city: '', state: '', zip: '', start_time: '00:00', end_time: '04:00', duration: 3 })
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
