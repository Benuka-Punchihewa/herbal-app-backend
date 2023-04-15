const multer = require("multer");

const uploader = multer({
  storage: multer.memoryStorage(),
  limits: {
    fileSize: 5 * 1024 * 1024, // limit files size to 5 MB
  },
});

module.exports = { uploader };
