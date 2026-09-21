let express=require("express");
const { createPostController, getAllPostController } = require("../controllers/file.controller");
let router=express.Router();
let upload=require("../config/multer")

router.post("/create", upload.single("image"), createPostController);
router.get("/getPosts", getAllPostController);

module.exports=router;