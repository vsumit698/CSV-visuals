const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');
const FILE_PATH = path.join('uploads/');


const csvFileSchema = new mongoose.Schema({

    fileName:{
      type:String,
      required:true
    },
    filePath:{
      type:String,
      required:true
    }
    
},{timestamps:true});



var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'..',FILE_PATH));
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname + '-' + Date.now())
    }
  });
   // fieldname belongs to name attribute value in updateProfile form
csvFileSchema.statics.uploadedCsvFile = multer({ storage: storage }).single('csvFile');
csvFileSchema.statics.filePath = FILE_PATH;

const csvFileModel = mongoose.model('csvFileModel',csvFileSchema);
module.exports = csvFileModel;