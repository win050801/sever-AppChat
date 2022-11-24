const {addRoom,getRoom,addThanhVien,updateManager,renameRoom,blockChat} = require("../controllers/roomController")

const router = require("express").Router();
router.post("/addRoom/", addRoom);
router.post("/getRoom/", getRoom);
router.post("/addTT/", addThanhVien);
router.post("/updateManager/", updateManager);
router.post("/renameRoom/", renameRoom);
router.post("/blockChat/", blockChat);
module.exports = router;