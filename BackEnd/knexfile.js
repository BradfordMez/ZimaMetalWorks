require('dotenv').config();
const pg = require('pg');

const sharedConfig = {
    client: 'pg',
    migration: { directory: './api/data/migrations' },
    seeds: { directory: './api/data/seeds' },
}

module.exports={
    development: {
        ...sharedConfig,
        connection: process.env.DEV_DATABASE_URL,
    },
    testing: {
        ...sharedConfig,
        connection: process.env.TEST_DATABASE_URL
    },
    production: {
        ...sharedConfig,
        connection: process.env.DATABASE_URL,
        pool: { min: 2, max: 10 }
    }
}