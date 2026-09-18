let mongoose=require("mongoose");

let NotesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        minLength:[20, "Minimum 20 character is necessary"],
    }
})

let Notes=mongoose.model("Notes_Day6", NotesSchema);
module.exports=Notes;