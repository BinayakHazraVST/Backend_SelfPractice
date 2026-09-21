let express=require("express");
let app=express();

let connectDb=require("../src/config/db");
connectDb();

let postRouter=require("./routes/file.route");

app.use(express.json())
app.use("/post", postRouter)


module.exports=app;