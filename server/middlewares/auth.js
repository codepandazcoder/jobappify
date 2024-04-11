const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const ErrorHandler = require('../utils/errorHandler');



exports.isAuthenticatedUser = async (req,res,next) => {
 const {token} = req.cookies;

 if(!token){
   return next(new ErrorHandler('please login to access resource',404));
    
 }

const decodedData= jwt.verify(token, process.env.JWT_SECRET);

req.user = await User.findById(decodedData.id)

 //console.log(token);

 next();
}