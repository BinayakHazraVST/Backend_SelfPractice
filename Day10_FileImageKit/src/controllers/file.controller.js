let Post=require("../Models/PostModel");
const sendFile = require("../services/uploadFile");

let createPostController=async(req,res)=>{
    let {caption}=req.body;
    let file=req.file;

    try{
        if(!caption || !file){
            return res.status(400).json({
                message:"data not provided"
            })
        }
        
        let uploadImage=await sendFile(file.buffer, file.originalname);

        let newPost=await Post.create({
            caption,
            file:uploadImage.url
        })

        res.status(201).json({
            message:"Post uploaded successfully",
            post:newPost
        })
        
        
    }catch(error){
        console.log("error",error.message)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

let getAllPostController=async(req,res)=>{
    try{
        let posts=await Post.find();
        res.status(200).json({
            message:"Fetched available posts",
            posts:posts
        })
    }catch(error){
        console.log("error",error.message)
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

module.exports={createPostController, getAllPostController};