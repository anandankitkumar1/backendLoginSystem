const mongoose = require("mongoose");

async function connectDatabase(){
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/users");
        console.log('Connected to database name users');
    } catch (error) {
        console.error('Could not connect to the database');
    }
}

module.exports = connectDatabase;