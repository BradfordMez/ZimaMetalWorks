exports.seed = function (knex) {
    return knex('updateAboveTestimonials')
    .del()
    .then(function(){
        return knex('updateAboveTestimonials').insert([
            {
                header: 'Deals',
                subject: 'Free Quotes on all Furniture and Machining Projects!',
                subtext: 'Mar 10, 2021 - Mar 31, 2021',
                image: 'https://i.imgur.com/XqQZQZL.jpg',
            }
        ])
    })
}