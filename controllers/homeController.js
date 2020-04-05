const csvFileModel = require('../models/csvFileModel');
const fileSystem = require('fs');
const csv = require('csv-parser');

module.exports.home = async function(req,res){
    var files = await csvFileModel.find({});
    res.render('home',{title : 'CSV VISUAL',files : files});
}




module.exports.uploadFile = async function(req,res){
    try {

        csvFileModel.uploadedCsvFile(req,res,function(error){
            if(error){
                console.log("error in uploading CSV FILE******");
                return;
            }
            
            if(req.file){
                var path = csvFileModel.filePath  + req.file.filename;
                csvFileModel.create({fileName : req.file.filename ,filePath : path});
            }
     
        });
        res.redirect('back');
    } catch (error) {
        console.log("Error Found",error);
    }
}

module.exports.openFile = async function(req,res){
    var fileDocument = await csvFileModel.findById(req.params.id);

    var path = require('path').join(__dirname,'..',fileDocument.filePath);

    var results = [];

    fileSystem.createReadStream(path).pipe(csv({
        mapHeaders: ({ header, index }) => header.toLowerCase(),
        mapValues: ({ header, index, value }) => value.toLowerCase()
    })).on('data', (data) => results.push(data))
       .on('end', () => {
         console.log(results);
         res.render('viewFile',{title : 'CSV VISUAL',results : results,fileName : fileDocument.fileName});
    });
    
    

}
