const router = require("express").Router();
const {
  createUser,
  loginUser,
  readAllUsers,
  readUser,
  updateUser,
  deleteUser,
  followUser,
  unFollowUser
} = require("../controllers/user-controller");

router.post("/register", createUser);

router.post("/login", loginUser);

router.get("/all", readAllUsers);

router.get("/:id", readUser);

router.put("/:id/follow", followUser);

router.put("/:id/unfollow", unFollowUser);

router.put("/:id", updateUser);

router.put("/:id", deleteUser);

module.exports = router;
