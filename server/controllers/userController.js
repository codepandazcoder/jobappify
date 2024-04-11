const User = require("../models/userModel");
const sendToken = require("../utils/jwtToken");
const ErrorHandler = require("../utils/errorHandler")
const catchAsycnError = require('../middlewares/catchAsyncErrors')

exports.getAllUser = async (req,res,next)=>{
    const users = await User.find();
    res.status(200).json({
        success: true,
        message: "working fine",
        users
    })    
}

exports.registerUser = catchAsycnError(async (req,res,next)=>{
    const {name,email,password}= req.body;

    const user = await User.create({
        name,email,password
    });

    const token = user.getJWTToken();

    res.status(200).json({
        success:true,
        message:"user created",
        token 
    })
});

exports.loginUser = async (req,res,next) => {

    const {email,password} = req.body;
    if(!email || !password){
        console.log('enter email & password');
        return next(new ErrorHandler("enter email & password",404));
    }
    const user = await User.findOne({ email }).select("+password")

    if(!user){
        console.log('Invalid user or password');
        return next(new ErrorHandler("Invalid user or password",404));
    }
    const isPasswordMatched = await user.comparePassword(password);

    console.log(isPasswordMatched);

    if(!isPasswordMatched){
        console.log('Invalid  password');
        return next(new ErrorHandler("Invalid user or password",404));
    }

    // const token = user.getJWTToken();

    // res.status(200).json({
    //     success:true,
    //     message:"user logged in",
    //     token 
    // })

    sendToken(user,200,res);

}


exports.logoutUser = async(req,res,next) => {
    res.cookie("token", null, {
        expires : new Date(Date.now()),
        httpOnly: true
    })

    res.status(200).json({
        success:true,
        message:"logged out"
    })
}