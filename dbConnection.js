const mongoose = require('mongoose');

// Connect to MongoDB
const mongoURL = "mongodb+srv://arsathali:ali@cluster0.ilqgp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
async function createDbConnection() {
    try {
        await mongoose.connect(mongoURL);
        console.log("Connected to MongoDB successfully.");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error.message);
    }
}

module.exports = { createDbConnection };