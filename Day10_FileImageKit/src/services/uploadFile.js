let ImageKit=require("imagekit");

const storageInstance=new ImageKit({
    urlEndpoint:process.env.imageKit_UrlEndpoint,
    publicKey:process.env.imageKit_PublicKey,
    privateKey:process.env.imageKit_PrivateKey
});

let sendFile=async(file, fileName)=>{
    try{
        let fileUpload={
            file, fileName,
            folder:"Sheryians_Prac_1"
        }

        let response=await storageInstance.upload(fileUpload);
        return response;
    }catch(error){
        console.log("error: ",error.message);
    }
}

module.exports=sendFile;