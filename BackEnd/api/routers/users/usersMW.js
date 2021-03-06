const Users = require("./usersModel");
const bcrypt = require("bcrypt");
const jwt = require("jwt-decode");

const validateUser = (req, res, next) => {
  const { body } = req;
  const keys = ["name", "password", "email"];
  keys.forEach((key) => {
    const trimmedKey = body[key].trim();
    if (!trimmedKey) {
      return next({ message: `${key} must be provided`, status: 400 });
    }
  });
  next();
};

const checkEmailUnique = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUser = await Users.getUserByEmail(email);
    if (existingUser) {
      next({ message: "Email already in use.", status: 404 });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

const checkEmailExists = async (req, res, next) => {
  try {
    const { email } = req.body;
    const existingUser = await Users.getUserByEmail(email);
    if (!existingUser) {
      next({ message: "Email does not exist.", status: 400 });
    } else {
      req.user = existingUser;
      next();
    }
  } catch (err) {
    next(err);
  }
};

const HASH_ROUNDS = parseInt(process.env.HASH_ROUNDS) || 10;

const hashPassword = (req, res, next) => {
  const { password } = req.body;
  const hashedPassword = bcrypt.hashSync(password, HASH_ROUNDS);
  req.body.password = hashedPassword;
  next();
};

const isAuthorized = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    next({ message: "you are not logged in", status: 401 });
  } else {
    const User = jwt(token);
    req.sentUser = User;
    next();
  }
};

const isAdmin = async (req, res, next) => {
  try {
    const { subject } = req.sentUser;
    const { admin } = await Users.getUserById(subject);
    if (!admin) {
      next({ message: "You are not an admin", status: 401 });
    } else {
      next();
    }
  } catch (err) {
    next(err);
  }
};

module.exports = {
  validateUser,
  checkEmailUnique,
  checkEmailExists,
  hashPassword,
  isAuthorized,
  isAdmin,
};
