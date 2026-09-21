let mongoose=require("mongoose");

let PostSchema=new mongoose.Schema({
    caption:{
        type:String,
        required:true,
    },
    file:{
        type:String,
        required:true,
    }
},{timestamps:true});

let Post=mongoose.model("New_Post", PostSchema);
module.exports=Post;