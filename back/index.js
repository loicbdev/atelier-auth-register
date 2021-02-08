const express = require('express');
const cors = require('cors');
require('express');
require('dotenv').config();

const authRoute = require('./routes/auth.controller.js');

const app = express();

const { SERVER_PORT, CLIENT_URL } = process.env; // (attention!!!)

app.use(
  cors({
    origin: CLIENT_URL,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', authRoute);

app.listen(SERVER_PORT, () => {
    console.log(`App listening at http://localhost:${SERVER_PORT}`)
  });
