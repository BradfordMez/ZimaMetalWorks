const db = require("../../data/dbConfig");

const getAllUsers = () => {
  return db("users");
};
const getUserBy = (filter) => {
  return db("users").where(filter);
};
const getUserById = (id) => {
  return db("users").where({ id }).first();
};
const getUserByEmail = (email) => {
  return db("users").where({ email }).first();
};
const createUser = async (user) => {
  const [newUserObj] = await db("users").insert(user, [
    "userID",
    "name",
    "password",
    "email",
    "number",
    "admin",
    "image",
  ]);
  return newUserObj;
};

module.exports = {
  getAllUsers,
  getUserBy,
  getUserById,
  getUserByEmail,
  createUser,
};
