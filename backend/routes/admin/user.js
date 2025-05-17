const express = require("express");
const route = express.Router();
const {
  createUser,
  getUsers,
  getUser,
  updateUser,
  deleteUser,
} = require("../../controllers/userController");

route.get("/", getUsers);
route.get("/:id", getUser);
route.post("/", createUser);
route.delete("/:id", deleteUser);
route.put("/:id", updateUser);

module.exports = route;
