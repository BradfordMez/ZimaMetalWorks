exports.seed = function (knex) {
    return knex('updateAboveTesti')
    .del()
    .then(function(){
        return knex('updateAboveTesti').insert([
            {
                header: 'Deals',
                title: 'Free Quotes on all Furniture and Machining Projects!',
                subtext: 'Mar 10, 2021 - Mar 31, 2021',
                image: 'https://i.imgur.com/XqQZQZL.jpg',
            }
        ])
    })
}