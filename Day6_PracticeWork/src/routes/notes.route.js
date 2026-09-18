let express=require("express");
let router=express.Router();

let {getAllNotesController,
    createNotesController,
    updateNotesDescriptionController,
    deleteNotesController
}=require("../Controllers/notes.controllers");

router.post("/create", createNotesController)
router.get("/allNotes", getAllNotesController);
router.put("/:id", updateNotesDescriptionController);
router.delete("/:id", deleteNotesController)

module.exports=router;