exports.seed = function (knex) {
    return knex('quoteImg')
    .del()
    .then(function(){
        return knex('quoteImg').insert([
            {
                imageID: -4,
                quoteID: -4,
                image: 'https://i.imgur.com/XqQZQZL.jpg',
                pinnedImg: false,
            },
            {
                imageID: -3,
                quoteID: -3,
                image: 'https://i.imgur.com/XqQZQZL.jpg',
                pinnedImg: false,
            },
            {
                imageID: -2,
                quoteID: -2,
                image: 'https://i.imgur.com/XqQZQZL.jpg',
                pinnedImg: false,
            }
        ])
    })
}