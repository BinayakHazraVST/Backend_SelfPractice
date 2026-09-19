let express=require("express");

let app=express();
let fileRouter=require("./routes/file.route");

app.use(express.json())
app.use("/file", fileRouter);

module.exports=app;