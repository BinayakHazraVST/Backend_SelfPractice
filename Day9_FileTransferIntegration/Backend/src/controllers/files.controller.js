let addSingleFileController = async (req, res) => {
    try {
        let file = req.file;
        let body = req.body;

        console.log("File:\n", file);
        console.log("Body:\n", body);

        res.status(201).json({
            message: "File uploaded successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

let addMultipleFilesController = async (req, res) => {
    try {
        let files = req.files;
        let body = req.body;

        console.log("Files:\n", files);
        console.log("Body:\n", body);

        res.status(201).json({
            message: "Files uploaded successfully",
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Internal server error",
        });
    }
};

module.exports = {
    addSingleFileController,
    addMultipleFilesController,
};
