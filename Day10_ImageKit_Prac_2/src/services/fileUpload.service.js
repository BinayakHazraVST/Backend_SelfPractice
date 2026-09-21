let ImageKit = require("imagekit");

let storageInstance = new ImageKit({
    urlEndpoint: process.env.imageKit_urlEndpoint,
    publicKey: process.env.imageKit_publicKey,
    privateKey: process.env.imageKit_privateKey,
});

let sendFile = async (file, fileName) => {
    try {
        let fileUpload = {
            file, fileName,
            folder: "Sheryians_Prac_2"
        }

        let response = await storageInstance.upload(fileUpload);
        return response;

    } catch (error) {
        console.log("Error", error.message)
    }
}

module.exports=sendFile;