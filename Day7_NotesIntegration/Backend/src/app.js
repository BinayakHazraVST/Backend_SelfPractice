let express=require("express");
let app=express();
let cors=require("cors");

let connectDb=require("./config/db");
connectDb();
let router=require("./routes/notes.routes");

app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
}))
app.use("/notes",router);

module.exports=app;