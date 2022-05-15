const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

// Importing route sub-modules from their respective files
const appointments = require('./routes/appointments');
const users = require('./routes/users');
const timeslots = require('./routes/timeslots');


// Connecting via mongoose
const mongoURI = process.env.MONGO_URI;
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const mongoConnection = mongoose.connection;
mongoConnection.once('open', () => {
  console.log('MongoDB database connection established successfully');
});

// ExpressJS facilitates the backend
const app = express();
const PORT = process.env.PORT || 3001;

// CORS is needed so that our frontend can connect to our backend smoothly
app.use(cors({ origin: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}` }));
// Express.json() allows a request body to be passed into our backend routes
app.use(express.json());

// Fixes the bug that occurs when requests are sent and headers cannot be set
// which leads to the app crashing
app.use((req,res,next) => {
  const _send = res.send;
  let sent = false;
  res.send = data => {
    if(sent) return;
    _send.bind(res)(data);
    sent = true;
  };
  next();
});

// Setting up route sub-modules in our express app
app.use('/appointments', appointments);
app.use('/users', users);
app.use('/timeslots', timeslots);


// Starting the express app
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
