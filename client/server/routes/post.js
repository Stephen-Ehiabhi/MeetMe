const router = require("express").Router();
const {
  createPost,
  readAllPosts,
  readPost,
  updatePost,
  deletePost,
} = require("../controllers/post-controller");

router.post("/", createPost);

router.get("/timeline/all", readAllPosts);

router.get("/:id", readPost);

router.put("/:id", updatePost);

router.put("/:id", deletePost);

module.exports = router;
