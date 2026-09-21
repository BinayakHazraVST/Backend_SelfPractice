let dotenv=require("dotenv");
dotenv.config();

let port=process.env.port;
let app=require("./src/app");

app.listen(port,()=>{
    console.log(`server running on ${port}`);
})