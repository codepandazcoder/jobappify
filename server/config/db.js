const mongoose= require('mongoose');
require('dotenv').config();

const connectDatabase = async () => {
    try {
      const db_connect = await mongoose.connect(process.env.DB_URI+'zapjob');
      
    } catch (error) {
      console.error(error);
      //process.exit(1);
      
    }
  };

module.exports = connectDatabase;