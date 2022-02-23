const express = require('express');
const helmet = require('helmet');
const cors = require('cors');


const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());


server.use((err, req, res, next) => {
    const { status } = err;
    res.status(status || 500).json(err)
});

module.exports = server