const express = require("express");
const clientRoute=require("./payment.routes.js")
const router=express.Router()

router.use('/api/client',clientRoute)


module.exports =router