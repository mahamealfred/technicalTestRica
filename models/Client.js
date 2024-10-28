const  mongoose = require('mongoose');

const ClientSchema= new mongoose.Schema({
    applicantId:{
        type:String,
        required:true,
        // min:2,
        // max:20,
         unique:true
    },
    tin:{
        type:String,
        required:true
    }, 
    companyName:{
        type:String,
        required:true
    }, 
    applicantRepresentative:{
        type:String,
        required:true
    }
},
{timestamps:true}
);
module.exports=mongoose.model("Client",ClientSchema);