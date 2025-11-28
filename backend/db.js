const mongoose = require('mongoose');

require('dotenv').config();
const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL)
    } catch (err) {
        console.error('Database connection error:', err);
    }
}
console.log('Connected to the database');

module.exports = connectToDatabase;
connectToDatabase();