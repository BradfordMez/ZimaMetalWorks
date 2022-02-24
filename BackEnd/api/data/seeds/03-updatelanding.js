exports.seed = function (knex) {
    return knex('updateLanding')
    .del()
    .then(function(){
        return knex('updateLanding').insert([
            {
                subject: 'Opening at 8:00am on Monday',
                image: 'https://i.imgur.com/XqQZQZL.jpg',
            }
        ])
    })
}