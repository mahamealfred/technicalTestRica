const  mongoose = require('mongoose');

const InformationSchema= new mongoose.Schema({
    applicantId:{
        type:String,
        required:true,
        // min:2,
        // max:20,
        // unique:false
    },
    plantName:{
        type:String,
        required:true,
        // min:2,
        // max:20,
        // unique:false
    },

    countryOfOrigin:{
        type:String,
        required:true
    }, 
    countryOfDestination:{
        type:String,
        required:true
    
    }, 
    quantity:{
        type:String,
        required:true,
        unique:true
    },
    unityOfMeasurement:{
        type:String,
        required:true
    },
    proofOfPayment:{
        type:String
    }
},
{timestamps:true}
);
module.exports=mongoose.model("Information",InformationSchema);