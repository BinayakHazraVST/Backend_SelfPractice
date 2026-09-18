const Notes = require("../Models/NotesModel")

let getAllNotesController=async(req,res)=>{
    try{
        let allNotes=await Notes.find();

        res.status(200).json({
            message:"All Notes are fetched",
            data:allNotes,
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal Server Error"
        })
    }
}

let createNotesController=async(req,res)=>{
    let {title, description}= req.body;
    try{
        let newNotes=await Notes.create({
            title, description
        })

        res.status(201).json({
            message:"New Notes created",
            data:newNotes
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

let updateNotesDescriptionController=async(req,res)=>{
    let id=req.params.id;
    let {description}=req.body;
    try{
        let notesDetails=await Notes.findByIdAndUpdate(id, 
        {description: description},
        {new:true}
        )

        if(!notesDetails){
            return res.status(404).json({
                message:"Notes not found"
            })
        }

        res.status(200).json({
            message:"Notes details updated",
            data:notesDetails
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

let deleteNotesController=async(req,res)=>{
    let {id}=req.params;
    try{
        let notesDetails=await Notes.findByIdAndDelete(id);
        if(!notesDetails){
            return res.status(404).json({
                message:"note not found"
            })
        }

        res.status(200).json({
            message:'Notes deleted successfully',
            data:notesDetails
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

module.exports={getAllNotesController,
    createNotesController,
    updateNotesDescriptionController,
    deleteNotesController
};