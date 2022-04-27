const express = require("express");

const router = express.Router();
const Users = require("./usersModel");
const MidWare = require("./usersMW");
const bcrypt = require("bcrypt");
const { tokenBuilder } = require("../../token-builder");

router.get("/", async (req, res, next) => {
  try {
    const allUsers = await Users.getAllUsers();
    res.status(200).json(allUsers);
  } catch (error) {
    next(error);
  }
});
router.post(
  "/create",
  MidWare.validateUser,
  MidWare.checkEmailUnique,
  MidWare.hashPassword,
  async (req, res, next) => {
    try {
      const addUser = await Users.createUser(req.body);
      const token = tokenBuilder(addUser);
      res.status(201).json({ token, addUser });
    } catch (error) {
      next({message: "error creating user", error});
    }
  }
);

router.post("/login", MidWare.checkEmailExists, async (req, res, next) => {
 const { password } = req.body;
  const { password: hashedPassword } = req.user;
  const isPasswordValid = await bcrypt.compare(password, hashedPassword);
  if (isPasswordValid) {
    const token = tokenBuilder(req.user);
    res.status(201).json({ token, user: req.user });
  } else {
    next({ message: "invalid credentials", status: 401 });
  }
});



module.exports = router;
