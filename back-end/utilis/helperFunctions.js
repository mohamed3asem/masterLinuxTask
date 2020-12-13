const multer = require('multer');
const fs = require('fs');
const path = require('path');

const appError = require('./appError');

// function to configue uploading an image an resizing it
const multerStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'public/images');
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split('/')[1];
    cb(null, `${file.originalname}-${Date.now()}.${ext}`);
  },
});

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true);
  } else {
    cb(new appError('Not an image please upload only images', 400));
  }
};

upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

// function to delete images from file system
exports.deleteImageFromFs = (filename) => {
  filePath = path.join(__dirname, `../public/images/${filename}`);
  fs.unlink(filePath, (err) => {
    new appError(err, 500);
  });
};

exports.uploadImage = upload.single('imageUrl');
