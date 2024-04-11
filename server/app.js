const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const cors = require('cors')

const errorMiddleware = require('./middlewares/error')

app.use(express.json());

app.use(cookieParser());

// route imports
const user = require("./routes/userRoute")

const job = require("./routes/jobRoute")

const corsOpts = {
    origin: '*',
  
    methods: [
      'GET',
      'POST',
    ],
  
    allowedHeaders: [
      'Content-Type',
    ],
  };
  
app.use(cors(corsOpts));

app.use("/app/v1",user)

app.use("/app/v1",job)

app.use(errorMiddleware)

module.exports = app;