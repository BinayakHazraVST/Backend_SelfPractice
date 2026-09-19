let multer=require("multer");

let storageLocal=multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null, "uploads/");
    },
    filename: (req, file, cb)=>{
        cb(null, Date.now()+"-"+file.originalname)
    }
});


let storageCloud=multer.memoryStorage();

let uploadLocal=multer({storage:storageLocal});
let uploadCloud=multer({storage:storageCloud});

module.exports={
    uploadCloud, uploadLocal
}

