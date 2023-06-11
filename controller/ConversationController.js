const Conversation = require('../model/Conversation')

class ConversationController {

    async createConversation(req, res) {
        const newConversation = new Conversation({
            members: [req.body.senderId, req.body.receiverId],
        });

        try {
            const savedConversation = await newConversation.save();
            res.status(200).json(savedConversation);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getConversationOfAnUser(req, res) {
        try {
            const conversation = await Conversation.find({
                members: { $in: [req.params.userId] },
            });
            res.status(200).json(conversation);
        } catch (err) {
            res.status(500).json(err);
        }
    }

    async getConversationIncludesTwoUsers(req, res) {
        try {
            const conversation = await Conversation.findOne({
                members: { $all: [req.params.firstUserId, req.params.secondUserId] },
            });
            res.status(200).json(conversation)
        } catch (err) {
            res.status(500).json(err);
        }
    }

}
module.exports = new ConversationController