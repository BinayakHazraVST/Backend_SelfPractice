let express = require("express");
let router = express.Router();

let {
  getAllNotesController,
  getOneNotesController,
  addNewNotesController,
  updateNotesController,
  deleteNotesController,
} = require("../controllers/notes.controllers");

router.get("/allnotes", getAllNotesController);
router.get("/:id", getOneNotesController);
router.post("/create", addNewNotesController);
router.put("/update/:id", updateNotesController);
router.delete("/delete/:id", deleteNotesController);

module.exports=router;
