const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema(
    {
        message: {
            text: { type: String },
            image: {
                type: Array,
                default: "",
            },
            files: {
                type: Array,
                default: "",
            },
            reaction: { type: String },
        },
        users: Array,
        deleted: {
            fromSelf: { type: Boolean, default: false },
            toAll: { type: Boolean, default: false },
        },
        sender: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
        },
        namesend: {
            type: String,
            default: "",
        },
        status: {
            type: String,
            default: "unseen",
        },
        avatarImage: {
            type: String,
            default: "",
        },
        createdAt: String
    },
   
);

module.exports = mongoose.model("Messages", MessageSchema);
