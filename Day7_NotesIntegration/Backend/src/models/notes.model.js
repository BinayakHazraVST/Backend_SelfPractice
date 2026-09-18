let mongoose=require("mongoose");

let NotesSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
        minLength:[20, "Minimum 20 character required"]
    }
})

let Notes=mongoose.model("Notes_Day7_Integration",NotesSchema);
module.exports=Notes;