const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'Shhhhhhhhhhh';

const tokenBuilder = (user) => {
    const payload = {
        userID: user.userID,
        name: user.name,
        email: user.email,
        number: user.number,
        admin: user.admin,
        image: user.image,
    };
    const options = {
        expiresIn: '2d',
    };
    return jwt.sign(payload, JWT_SECRET, options);
}

module.exports = {
    JWT_SECRET,
    tokenBuilder,
}