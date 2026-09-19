let express=require("express");
let router=express.Router();

let {uploadLocal, uploadCloud}=require("../config/multer");

router.post("/local", uploadLocal.array("images"), (req,res)=>{
    let body=req.body;
    let file=req.files;

    console.log(body);
    console.log(file);

    res.status(201).json("File saved successfully locally")
});

router.post("/cloud", uploadCloud.single("image"), (req,res)=>{
    let body=req.body;
    let file=req.file;

    console.log(body);
    console.log(file);

    res.status(201).json("File saved successfully on cloud")
})

module.exports=router;