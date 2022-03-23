const router = require("express").Router();
const {
  createConversation,
  readAllConversations,
  readConversation,
  updateConversation,
  deleteConversation,
} = require("../controllers/conversation-controller");

router.post("/", createConversation);

router.get("/:userId", readAllConversations);

router.get("/:id", readConversation);

//router.put("/:id", updateConversation);

router.put("/:id", deleteConversation);

module.exports = router;
