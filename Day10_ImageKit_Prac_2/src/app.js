let express=require("express");
let app=express();

let postRouter=require("./routes/post.route");
let connectDb=require("./config/db");
connectDb();

app.use(express.json());
app.use("/post",postRouter);

module.exports=app;