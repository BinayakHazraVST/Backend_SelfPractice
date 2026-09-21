let sendFile=require("../services/fileUpload.service");
let Post=require("../models/PostModel")

let createPostController=async(req,res)=>{
    let {caption}=req.body;
    let file=req.file;

    try{
        if(!file || !caption){
            return res.status(400).json({
                message:"Invalid input"
            })
        }

        let uploadedFile=await sendFile(file.buffer, file.originalname);
        let newPost=await Post.create({
            caption,
            file:uploadedFile.url
        });

        res.status(201).json({
            message:"Post created successfully",
            post:newPost
        })
    }catch(error){
        console.log("Error:",error.message);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

let getAllPostController=async(req,res)=>{
    try {
        let post=await Post.find();
        res.status(200).json({
            message:"All posts fetched",
            post:post
        })
    } catch (error) {
        console.log("Error:",error.message);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

module.exports={
    createPostController,
    getAllPostController
}