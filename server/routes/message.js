const router = require("express").Router();
const {
  createMessage,
  readAllMessages,
  readMessage,
  deleteMessage,
} = require("../controllers/Message-controller");

router.post("/", createMessage);

router.get("/all", readAllMessages);

router.get("/:id", readMessage);

//router.put("/:id", updateMessage);

router.put("/:id", deleteMessage);

module.exports = router;
