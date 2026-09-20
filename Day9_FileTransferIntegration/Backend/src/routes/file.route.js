let uploadLocal=require("../config/multer");

let {addSingleFileController, 
    addMultipleFilesController
}=require("../controllers/files.controller");

let express=require("express");
let router=express.Router();

router.post("/addSingle", uploadLocal.single("image"), addSingleFileController);

router.post("/addMultiple", uploadLocal.array("images"), addMultipleFilesController);

module.exports=router;
