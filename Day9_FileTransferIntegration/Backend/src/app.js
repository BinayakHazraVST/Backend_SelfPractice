let express=require("express");
let app=express();

let cors=require("cors");
let fileRouter=require("./routes/file.route");

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true,
}))

app.use(express.json());
app.use("/files", fileRouter);

module.exports=app;
