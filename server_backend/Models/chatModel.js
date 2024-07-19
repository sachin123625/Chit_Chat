const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    members: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: 'User',
        required: true
    }
}, {
    timestamps: true
});

const ChatModel = mongoose.model("Chat", chatSchema);

module.exports = ChatModel;
