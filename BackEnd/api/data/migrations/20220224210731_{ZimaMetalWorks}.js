exports.up = async (knex) => {
    await knex.schema
        .createTable('users', (users) => {
            users.increments('userID');
            users.string('name', 255).notNullable();
            users.string('password', 255).notNullable();
            users.string('email', 255).notNullable();
            users.string('number', 10).notNullable();
            users.boolean('admin').defaultTo(false);
            users.string('image').notNullable();
        })
        .createTable('updateLanding', (update) => {
            update.string('subject').notNullable();
            update.string('image').notNullable();
        })
        .createTable('updateAboveTesti', (update) => {
            update.string('header').notNullable();
            update.string('title').notNullable();
            update.string('subtext').notNullable();
            update.string('image').notNullable();
        })
        .createTable('updateAbout', (update) => {
            update.string('body').notNullable();
            update.string('image').notNullable();
        })
        .createTable('updateHours', (update) => {
            update.string('monday').notNullable();
            update.string('tuesday').notNullable();
            update.string('wednesday').notNullable();
            update.string('thursday').notNullable();
            update.string('friday').notNullable();
            update.string('saturday').notNullable();
            update.string('sunday').notNullable();
        })
        .createTable('quotes', (quotes) => {
            quotes.increments('quoteID');
            quotes
                .integer('userID')
                .references('userID')
                .inTable('users')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
            quotes.string('name');
            quotes.text('number');
            quotes.string('email');
            quotes.string('subject').notNullable();
            quotes.string('body', 1000).notNullable();
            quotes.string('status').defaultTo('New')
            quotes.date('dateSent')
            quotes.boolean('project').defaultTo(false)
        })
        .createTable('message', (message) => {
            message.increments('messageID');
            message
                .integer('userID')
                .notNullable()
                .references('userID')
                .inTable('users')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
            message.string('message', 1000).notNullable();
            message.dateTime('timeSent').notNullable();
        })
        .createTable('testimonial', (testimonial) => {
            testimonial.increments('testID');
            testimonial
                .integer('userID')
                .notNullable()
                .references('userID')
                .inTable('users')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
            testimonial.integer('rating').notNullable();
            testimonial.string('body', 1000).notNullable();
            testimonial.date('dateSent').notNullable();
        })
        .createTable('quoteImg', (quoteIMG) => {
            quoteIMG.increments('imageID');
            quoteIMG
                .integer('quoteID')
                .notNullable()
                .references('quoteID')
                .inTable('quotes')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
            quoteIMG.string('image').notNullable();
            quoteIMG.boolean('pinnedImg').defaultTo(false);
        })
        .createTable('quoteUpdates', (updates) => {
            updates.increments('updateID');
            updates
                .integer('quoteID')
                .notNullable()
                .references('quoteID')
                .inTable('quotes')
                .onDelete('RESTRICT')
                .onUpdate('RESTRICT');
            updates.string('update').notNullable();
            updates.date('dateSent').notNullable();
        })
};

exports.down = async (knex) => {
    await knex.schema
        .dropTableIfExists('quoteUpdates')
        .dropTableIfExists('quoteIMG')
        .dropTableIfExists('testimonial')
        .dropTableIfExists('message')
        .dropTableIfExists('quotes')
        .dropTableIfExists('updateHours')
        .dropTableIfExists('updateAbout')
        .dropTableIfExists('updateAboveTesti')
        .dropTableIfExists('updateLanding')
        .dropTableIfExists('users');
}