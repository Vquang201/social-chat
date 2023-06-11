const MessageController = require('../controller/MessageController');
const router = require('express').Router()

router.get("/:conversationId", MessageController.getMess)
router.post("/", MessageController.createMess)

module.exports = router
