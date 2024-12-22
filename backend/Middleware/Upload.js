const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "Upload/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});

const Upload = multer({ storage });

module.exports = Upload;
