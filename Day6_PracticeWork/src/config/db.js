let mongoose=require("mongoose");

let connectDb=async()=>{
    try{
        await mongoose.connect(process.env.mongodb_url);
        console.log("Database connected");
    }catch(error){
        console.log("Error in connecting the database",error);
    }
}

module.exports=connectDb;