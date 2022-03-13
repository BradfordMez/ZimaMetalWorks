const express = require('express');

const router = express.Router();
const Users = require('./usersModel');
const MidWare = require('./usersMW');
const bcrypt = require('bcryptjs');

router.get('/', async (req, res, next) => {
    try {
        const allUsers = await Users.getAllUsers();
        res.status(200).json(allUsers);
    } catch (error) {
        next(error);
    }
});