let express=require("express");
let app=express();

let router=require("./routes/notes.route")
let connectDb=require("./config/db");
connectDb();

app.use(express.json());
app.use("/notes", router);

module.exports=app;