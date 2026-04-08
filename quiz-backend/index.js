const express = require('express');
const app = express();
const connectDB = require('./config/db');

// Connect to the database
// this is an async function, so we need to await it

await connectDB();





app.listen(3000, () => {
  console.log('Quiz backend is running on port 3000');
});

