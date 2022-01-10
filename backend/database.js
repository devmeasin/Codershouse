const mongoose = require('mongoose');
const { DB_URL } = require('./config');

const connectDB = async () => {
    try {
        await mongoose.connect(DB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Database connected!');
    } catch (err) {
        console.log('Connection failed');
    }
}
// mIAY0a6u1ByJsWWZ

module.exports = connectDB;
