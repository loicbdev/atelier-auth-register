/* eslint-disable no-unused-vars */
const express = require('express');
const cors = require('cors');
require('dotenv').config();
// const connection = require('./database');
const usersRoute = require('./src/routes/users.controllers');

const { SERVER_PORT, CLIENT_URL } = process.env;

const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
  })
);
app.use(express.json());

// Your code here!
app.use('/users', usersRoute);

// Don't write anything below this line!
app.listen(SERVER_PORT, () => {
  console.log(`Server is running on port ${SERVER_PORT}.`);
});