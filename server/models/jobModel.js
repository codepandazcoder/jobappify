const mongoose= require('mongoose');

const validator = require('validator');

const jobSchema = new mongoose.Schema({
    title: {
      type: String,
      required: [true, "Please Enter The Job Title"],
      maxLength: [30, "Title cannot exceed 30 characters"],
      minLength: [4, "Title should have more than 4 characters"],
    },
    contact_email: {
      type: String,
      required: [true, "Please Enter Your Email"],
      unique: true,
      validate: [validator.isEmail, "Please Enter a valid Email"],
    },
    type: {
        type: String,
        required: [true, "Please Enter The Job Type"],
        maxLength: [30, "Name cannot exceed 30 characters"],
        minLength: [3, "Name should have more than 3 characters"],
    },
    description: {
        type: String,
        required: [true, "Please Enter The Job Type"],
        maxLength: [250, "Name cannot exceed 250 characters"],
        minLength: [3, "Name should have more than 3 characters"],
    },
    salary: {
        type: String,
        required: [true, "Please Enter The Salary"]        
    },
    location:{
        type: String,
        required: [true, "Please Enter a Job location"]        
    },
    company:{
      type: String,
      required: [true, "Please Enter The Company Name"],
      maxLength: [30, "Company Name cannot exceed 30 characters"],
      minLength: [4, "Company Name should have more than 4 characters"],
    },
    contact_phone:{
      type: String,
      required: [true, "Please Enter The Company Contact No."],
    },    
    createdAt: {
      type: Date,
      default: Date.now,
    },
  
    
  });


module.exports = mongoose.model('Job',jobSchema); 