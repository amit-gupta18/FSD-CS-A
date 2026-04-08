// connect to database here 
const dotenv = require('dotenv');
dotenv.config();
const mongoose = require('mongoose');

async function connectDB() {
    mongoose.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB');
    });
}

module.exports = connectDB;

