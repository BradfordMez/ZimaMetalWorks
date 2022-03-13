exports.seed = function (knex) {
    return knex('quoteUpdates')
    .del()
    .then(function(){
        return knex('quoteUpdates').insert([
            {
                updateID: -4,
                quoteID: -4,
                update: 'Just finished up yadda yadda',
                dateSent: '2020-06-10T09:26:03.478039Z'
            },
            {
                updateID: -3,
                quoteID: -4,
                update: 'Finished up more yadda yadda',
                dateSent: '2020-06-10T09:26:03.478039Z'
            },
        ])
    })
}