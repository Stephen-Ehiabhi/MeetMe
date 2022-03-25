const router = require("express").Router();
const {
  createMessage,
  readAllMessages,
  deleteMessage,
} = require("../controllers/Message-controller");

router.post("/", createMessage);

router.get("/:conversationId", readAllMessages);

//router.put("/:id", updateMessage);

router.put("/:conversationId", deleteMessage);

module.exports = router;
