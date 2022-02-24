exports.seed = function (knex) {
    return knex('users')
    .del()
    .then(function(){
        return knex('users').insert([
            {
                userID: -3,
                name: 'Darryl Wilson',
                password: 'BBQBARBARIAN',
                email: 'darrylwilson@gmail.com',
                number: '1234567890',
                admin: false,
                image: 'https://i.imgur.com/XqQZQZL.jpg',
            },
            {
                userID: -2,
                name: 'Glenn Close',
                password: 'DamnImReallyANerd',
                email: 'OneManBand@gmail.com',
                number: '1234567890',
                admin: false,
                image: 'https://i.imgur.com/XqQZJKL.jpg',
            },
            {
                userID: -1,
                name: 'Ron Stampler',
                password: 'DaringRougeGuy',
                email: 'RampantDagger@gmail.com',
                number: '1234567890',
                admin: false,
                image: 'https://i.imgur.com/XtHYjZL.jpg',
            },           
        ])
    })
}