const router = require("express").Router();
const {
  createUser,
  readAllUsers,
  readUser,
  updateUser,
  deleteUser,
  followUser,

} = require("../controllers/user-controller");

router.post("/register", createUser);

router.get("/all", readAllUsers);

router.get("/:id", readUser);

router.put("/:id/follow", followUser);

router.put("/:id", updateUser);

router.put("/:id", deleteUser);

module.exports = router;
