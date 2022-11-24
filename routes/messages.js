const {
    addMessage,
    getMessages,
    addreaction,
    getMessagesRoom,
    imageMessageSend,
    fileMessageSend,
    deleteMessageFromSelf,
    deleteMessageToAll,
} = require("../controllers/messageController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getMessages);
router.post("/addreaction/", addreaction);
router.post("/getMessagesRoom/", getMessagesRoom);

router.post("/image-message-send/", imageMessageSend);
router.post("/file-message-send/", fileMessageSend);

router.post("/delete-message-fromSelf/", deleteMessageFromSelf);
router.post("/delete-message-toAll/", deleteMessageToAll);

module.exports = router;
