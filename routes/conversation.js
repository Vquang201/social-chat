const ConversationController = require('../controller/ConversationController')
const router = require('express').Router()

//get conv of a user
router.get("/:userId", ConversationController.getConversationOfAnUser)
// get conv includes two userId
router.get("/find/:firstUserId/:secondUserId", ConversationController.getConversationIncludesTwoUsers)
//new conv
router.post("/", ConversationController.createConversation)


module.exports = router