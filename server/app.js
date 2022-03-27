const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

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
app.use(cors({ origin: `${process.env.REACT_APP_HOST}:${process.env.REACT_APP_PORT}`}));
// Express.json() allows a request body to be passed into our backend routes
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
