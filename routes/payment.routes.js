const express = require("express");
const multer =require("multer")
const clientController=require("../controller/clientController");
const router=express.Router()

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function(req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        console.log()
        cb(null, uniqueSuffix+file.originalname)
      
    }
})
const upload = multer({ storage: storage })
//router.post('/create-information',upload.single('file'),clientController.createClient)
router.post('/create-information',clientController.createClient)

module.exports =router