const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

async function connect() {
  try {
    await mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("Connected to MongoDB:", process.env.DB_URL);
  } catch (error) {
    console.log("Error connecting to MongoDB:", error.message);
  }
}

connect();

module.exports = { connect };
