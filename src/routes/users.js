const express = require("express");
const router = express.Router();

const UsersController = require("../controller/users");

//CREATE -> POST http://localhost:5500/user1
router.post("/user1", UsersController.createUsers);

//READ -> GET http://localhost:5500/getAll
router.get("/getAll", UsersController.getAllUsers);

//CREATE -> PUT
// router.put("/user1", (req, res, next) => {
//   res.json(user1);
//   next();
// });

//CREATE -> DELLET
// router.delete("/user2", (req, res, next) => {
//   res.json(user1[1]);
//   next();
// });

module.exports = router;
