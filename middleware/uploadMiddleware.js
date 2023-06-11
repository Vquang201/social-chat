const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_NAME,
    api_key: process.env.CLOUDINARY_KEY,
    api_secret: process.env.CLOUDINARY_SECRET
});

const storage = new CloudinaryStorage({
    cloudinary,
    allowedFormats: ['jpg', 'png'],

    // đưa ảnh lên root của cloudinary , cách nào cũng đc
    // filename: function (req, file, cb) {
    //   cb(null, file.originalname);
    // },

    // đưa ảnh lên folder 
    params: {
        folder: 'image_chat'
    }

})

const uploadCloudinary = multer({ storage });

module.exports = uploadCloudinary