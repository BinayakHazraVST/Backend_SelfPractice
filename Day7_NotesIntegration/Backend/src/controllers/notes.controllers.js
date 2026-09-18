let Notes=require("../models/notes.model");

let getAllNotesController=async(req,res)=>{
    try{
        let notesData=await Notes.find();

        return res.status(200).json({
            message:"Notes found",
            data:notesData,
        })
    }catch(error){
        console.log(error)
        res.status(500).json({
            message:"Internal server error"
        })
    }
};

let getOneNotesController=async(req,res)=>{
    let {id}=req.params;
    try{
        let notesData=await Notes.findById(id);
        if(!notesData){
            return res.status(404).json({
                message:"Notes not found"
            })
        }

        res.status(200).json({
            message:"Notes found",
            data:notesData
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

let addNewNotesController=async(req,res)=>{
    let {title, description}=req.body;
    try{
        let notesData=await Notes.create({
            title, description
        })

        res.status(201).json({
            message:"Notes added",
            data:notesData,
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

let updateNotesController=async(req,res)=>{
    let {title, description}=req.body;
    let {id}=req.params;

    let updateData={};
    if(title){
        updateData.title=title;
    }
    if(description){
        updateData.description=description;
    }

    try{
        let notesData=await Notes.findByIdAndUpdate(id,
            updateData,
            {new:true}
        )

        if(!notesData){
            return res.status(404).json({
                message:"Notes not found"
            })
        }
        res.status(200).json({
            message:"Notes updated",
            data:notesData
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
        let notesData=await Notes.findByIdAndDelete(id);
        if(!notesData){
            return res.status(404).json({
                message:'Notes not found',
            })
        }

        res.status(204).json({
            message:"Notes deleted",
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            message:"Internal server error"
        })
    }
}

module.exports={
    getAllNotesController,
    getOneNotesController,
    addNewNotesController,
    updateNotesController,
    deleteNotesController,
}