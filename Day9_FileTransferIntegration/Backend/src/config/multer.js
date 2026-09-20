let multer=require("multer");

let storageLocal=multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "uploads/");
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now()+"-"+file.originalname)
    }
})

let uploadLocal=multer({storage:storageLocal});

module.exports=uploadLocal;