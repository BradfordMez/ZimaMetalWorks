exports.seed = function (knex) {
    return knex('quotes')
    .del()
    .then(function(){
        return knex('quotes').insert([
            {
                quoteID: -4,
                userID: -3,
                name: 'Darryl Wilson',
                number: '1234567890',
                email: 'darrylwilson@gmail.com',
                subject: 'Catalytic Converter',
                body: ' I was wondering about availability and rates. I need help with the following: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat in egestas erat imperdiet. Nunc sed blandit libero volutpat sed cras ornare arcu.',
                status: 'On-Going',
                dateSent: '2020-02-24T00:00:00.000Z',
                project: false,
            },
            {
                quoteID: -3,
                userID: -2,
                name: null,
                number: null,
                email: null,
                subject: 'Loren Ipsum',
                body: ' I was wondering about availability and rates. I need help with the following: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat in egestas erat imperdiet. Nunc sed blandit libero volutpat sed cras ornare arcu.',
                status: 'New',
                dateSent: '2020-06-10T09:26:03.478039Z',
                project: false,
            },
            {
                quoteID: -2,
                userID: null,
                name: 'Glenn Close',
                number: '1234567890',
                email: 'OneManBand@gmail.com',
                subject: 'Loren Ipsum',
                body: ' I was wondering about availability and rates. I need help with the following: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Placerat in egestas erat imperdiet. Nunc sed blandit libero volutpat sed cras ornare arcu.',
                status: 'New',
                dateSent: '2020-06-10T09:26:03.478039Z',
                project: false,
            },
        ])
    })
}