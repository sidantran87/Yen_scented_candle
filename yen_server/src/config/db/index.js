const mongoose = require("mongoose");

require("dotenv/config");

async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Successfully!");
  } catch (error) {
    console.log("error", error.message);
  }
}

module.exports = { connect };
