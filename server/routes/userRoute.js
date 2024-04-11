const { getAllUser, registerUser, loginUser, logoutUser } = require("../controllers/userController");

const express = require("express");
const { isAuthenticatedUser } = require("../middlewares/auth");
const router = express.Router();

router.get('/users',isAuthenticatedUser, getAllUser);

router.post('/register',registerUser);

router.post('/login',loginUser);

router.get('/logout',logoutUser);

module.exports = router; 