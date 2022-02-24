exports.seed = function (knex) {
    return knex('updateAbout')
    .del()
    .then(function(){
        return knex('updateAbout').insert([
            {
                body: 'Small machine shop with background in aerospace manufacturing and now branching out to various types of manufacturing & fabrication. From Prototype to Production, no job is too big or small. By appointment only, No walk ins please.',
                image: 'https://i.imgur.com/XqQZQZL.jpg',
            }
        ])
    })
}