const router = require("express").Router();
const {
  createUser,
  readAllUsers,
  readUser,
  updateUser,
  deleteUser,
  addFollower,
  
} = require("../controllers/user-controller");

router.post("/", createUser);

router.get("/all", readAllUsers);

router.get("/:id", readUser);

router.get("/:id", addFollower);

router.put("/:id", updateUser);

router.put("/:id", deleteUser);

module.exports = router;
