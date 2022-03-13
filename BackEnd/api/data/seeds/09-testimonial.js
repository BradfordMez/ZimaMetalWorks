exports.seed = function (knex) {
    return knex('testimonial')
    .del()
    .then(function(){
        return knex('testimonial').insert([
            {
                testID: -2,
                userID: -3,
                rating: 4,
                dateSent: '2020-06-10T09:26:03.478039Z',
                body: 'Quinton did a great job welding a few items on my truck was very helpful and he exceeded my expectations I highly recommend him.'
            },
            {
                testID: -1,
                userID: -2,
                rating: 5,
                dateSent: '2020-06-10T09:26:03.478039Z',
                body: 'I reached out to Quinton, the owner of Zima, about fixing some cracked welds in a pontoon I am restoring. I dropped off the boat in the morning and it was done by that afternoon. I highly suggest Zima Technologies for all your machining and welding needs! Friendly, time-efficient and cost-effective services.'
            }
        ])
    })
}