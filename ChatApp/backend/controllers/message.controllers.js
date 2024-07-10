import conversationModel from "../models/conversation.model.js";
import messageModel from "../models/message.model.js";

export const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const {id: receiverId} = req.params;
        const senderId = req.user._id;


        let conversation = await conversationModel.findOne({
            participants: { $all: [senderId, receiverId]}
        })
        if (!conversation) {
            conversation = await conversationModel.create({
                participants: [senderId, receiverId]
            })
        }
        const newMessage = await messageModel.create({
            senderId,
            receiverId,
            message
        })

        conversation.messages.push(newMessage._id)

        // This will run in parallel
        await Promise.all([conversation.save(), newMessage.save()])

        return res.status(200).json(newMessage)

    } catch (error) {
        console.log("Error in sending the message:", error.message);
        return res.status(500).json({
            Error: "Internal Server Error"
        })
    }
}