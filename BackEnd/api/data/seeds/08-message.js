exports.seed = function (knex) {
    return knex('message')
    .del()
    .then(function(){
        return knex('message').insert([
            {
                messageID: -5,
                userID: -3,
                message: 'Hey man, Just wanted to see how that Catalytic Converter is going',
                timeSent: '2020-06-10T09:26:03.478039Z'
            },
            {
                messageID: -4,
                userID: -2,
                message: 'Hey man, Just wanted to see how that Catalytic Converter is going',
                timeSent: '2020-06-10T09:26:03.478039Z'
            },
            {
                messageID: -3,
                userID: -1,
                message: 'Hey man, Just wanted to see how that Catalytic Converter is going',
                timeSent: '2020-06-10T09:26:03.478039Z'
            },
            {
                messageID: -2,
                userID: -2,
                message: 'Hey man, Just wanted to see how that Catalytic Converter is going',
                timeSent: '2020-06-10T09:26:03.478039Z'
            },
        ])
    })
}