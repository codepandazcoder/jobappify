require('dotenv').config();
const { default: mongoose } = require('mongoose');
const app = require('./app');
//const mongoose = require('mongoose');
const connectDatabase = require('./config/db');


const PORT = process.env.PORT;

const db = connectDatabase();

mongoose.connection.on('connected', () => console.log('db connected'));

const server = app.listen(PORT,()=>{
    console.log('backend started on port: '+PORT);
})

