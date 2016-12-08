
exports.up = function (knex, Promise) {
  return Promise.all([
    knex.schema.createTable('accounts', table => {
      table.increments('id').primary();
      table.string('username').unique().notNullable();
      table.string('password').notNullable();
      table.string('email').notNullable();
    }),

    knex.schema.createTable('profiles', table => {
      table.increments('id').primary();
      table.string('first_name');
      table.string('last_name');
      table.string('intro');
      table.string('img_url');
      table.string('city');
      table.string('state');
      table.boolean('is_asker');
      table.boolean('is_helper');
      table.integer('account_id').references('id').inTable('accounts');
    }),

    knex.schema.createTable('helps', table => {
      table.increments('id').primary();
      table.integer('asker_id').references('id').inTable('profiles');
      table.integer('helper_id').references('id').inTable('profiles');
      table.string('description');
      table.string('subject');
      table.string('type'); // onsite or online
      table.string('address');
      table.string('city');
      table.string('state');
      table.string('zip');
      table.string('start_time');
      table.string('end_time');
      table.integer('duration');
      table.timestamps();
    }),

    knex.schema.createTable('reviews', table => {
      table.increments('id').primary();
      table.integer('reviewer_id').references('id').inTable('profiles');
      table.integer('reviewed_id').references('id').inTable('profiles');
      table.string('description');
      table.integer('rating');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([
      knex.schema.dropTable('reviews'),
      knex.schema.dropTable('helps'),
      knex.schema.dropTable('profiles'),
      knex.schema.dropTable('accounts')
  ]);
};
