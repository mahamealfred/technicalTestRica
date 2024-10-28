
const { model } = require("mongoose");

const Client=require("../models/Client");

const Information = require("../models/Information");
const multer =require("multer")
class clientController {
    static async createClient(req, res) {
        const {
        applicantId,
        tin,
        companyName,
        applicantRepresentative,
        plantName,
        countryOfOrigin,
        countryOfDestination,
        quantity,
        unityOfMeasurement,
        proofOfPayment
        }=req.body

       try {
       const client= await Client.create({
          applicantId,
          tin,
          companyName,
          applicantRepresentative
        });
        const userInfo= await Information.create({
            applicantId,
            plantName,
            countryOfOrigin,
            countryOfDestination,
            quantity,
            unityOfMeasurement,
            proofOfPayment
          });
let customData={
    ApplicanId:client.applicantId,
    companyName:client.companyName,
    commodityName:userInfo.plantName,
    quantity:userInfo.quantity,
    countryOfOrigin:userInfo.countryOfOrigin,
    destinationCountry:userInfo.countryOfDestination
}
        return res.status(200).json({
          statusCode: 200,
          status:"SUCCESS",
          message: "Information Saved Successfull ",
          data:customData
        });
      } catch (error) {
        return res.status(500).json({
          statusCode: 500,
          status:"FAILED",
          message: error.message,
        });
      }
    }
}

module.exports =clientController