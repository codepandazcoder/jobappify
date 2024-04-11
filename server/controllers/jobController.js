const Job = require("../models/jobModel");
const ErrorHandler = require("../utils/errorHandler")
const catchAsycnError = require('../middlewares/catchAsyncErrors')

exports.getAllJob = catchAsycnError(async (req,res,next)=>{
    const jobs = await Job.find();
    res.status(200).json({
        success: true,
        message: "working fine", 
        jobs
    })    
})

exports.addJob = catchAsycnError(async (req,res,next)=>{
    const {type,title,description,salary,location,company,contact_email,contact_phone}= req.body;

    const job = await Job.create({
        type,title,description,salary,location,company,contact_email,contact_phone
    });

    res.status(200).json({
        success:true,
        message:"job created",
        job 
    })

})